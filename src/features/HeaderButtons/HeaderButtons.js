import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HeaderButtons.css';
import { ActionCreators } from 'redux-undo';
import {
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
  Modifier,
} from 'draft-js';
import {
  splitState,
  createSelection,
  getSelectionInfo,
} from '../blocks/helpers';

export function MergeButton() {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onMouseDown={(event) => {
        event.preventDefault();
        if (
          // verify active element is a Textfield Component
          document.activeElement.getAttribute('class') !==
          'notranslate public-DraftEditor-content'
        ) {
          return;
        }
        const {
          id,
        } = document.activeElement.parentElement.parentElement.parentElement;
        dispatch({ type: 'mergeText', payload: { id } });
      }}
    >
      merge
    </button>
  );
}

export function SplitButton() {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onMouseDown={(event) => {
        event.preventDefault();
        if (
          // verify active element is a Textfield Component
          document.activeElement.getAttribute('class') !==
          'notranslate public-DraftEditor-content'
        ) {
          return;
        }
        const {
          id,
        } = document.activeElement.parentElement.parentElement.parentElement;
        dispatch({ type: 'splitText', payload: { id } });
      }}
    >
      split
    </button>
  );
}

export function RedoButton() {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(ActionCreators.redo())}>
      redo
    </button>
  );
}

export function UndoButton() {
  const dispatch = useDispatch();
  // const UndoButton = (
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(ActionCreators.undo());
      }}
    >
      undo
    </button>
  );
}

export function HistoricalLayerButton(props) {
  const dispatch = useDispatch();
  const txts = useSelector((state) => state.blocks.present.txts);
  const selections = useSelector((state) => state.blocks.present.selections);
  return (
    <button
      type="button"
      data-style={props.dataStyle}
      onMouseUp={(event) => event.preventDefault()}
      onMouseDown={(event) => {
        event.preventDefault();
        if (
          // verify active element is a Textfield Component
          document.activeElement.getAttribute('class') !==
          'notranslate public-DraftEditor-content'
        ) {
          return;
        }
        const style = event.currentTarget.getAttribute('data-style');
        const {
          id,
        } = document.activeElement.parentElement.parentElement.parentElement;

        const contentState = convertFromRaw(JSON.parse(txts[id]));
        const newSelectionState = createSelection(selections[id]);
        console.log(
          'prior to update: ',
          newSelectionState.getAnchorKey(),
          newSelectionState.getAnchorOffset()
        );

        let newEditorState = EditorState.createWithContent(contentState);

        newEditorState = EditorState.acceptSelection(
          newEditorState,
          newSelectionState
        );
        newEditorState = removeInlineStyles(newEditorState);
        newEditorState = RichUtils.toggleInlineStyle(newEditorState, style);

        console.log(
          'after update:',
          newEditorState.getSelection().getAnchorKey(),
          newEditorState.getSelection().getAnchorOffset()
        );

        dispatch({
          type: 'updateText',
          payload: {
            id,
            txt: JSON.stringify(
              convertToRaw(newEditorState.getCurrentContent())
            ),
            split: splitState(newEditorState),
            selection: getSelectionInfo(newEditorState),
          },
        });
      }}
    >
      {props.name}
    </button>
  );
}

export default function HeaderButtons() {
  return (
    <div className="header_buttons">
      <UndoButton />
      <RedoButton />
      <MergeButton />
      <SplitButton />
      <HistoricalLayerButton dataStyle="TANNA" name="Tannaitic" />
      <HistoricalLayerButton dataStyle="AMORA" name="Amoraic" />
      <HistoricalLayerButton
        dataStyle="AMORA_MIDRASH"
        name="Tannaitic from Amora"
      />
      <HistoricalLayerButton dataStyle="STAM" name="Stam" />
      <HistoricalLayerButton
        dataStyle="STAM_MIDRASH"
        name="Tannaitic from Stam"
      />
      <HistoricalLayerButton dataStyle="CLEAR" name="Clear" />
    </div>
  );
}

const removeInlineStyles = (editorState) => {
  const styles = [
    'TANNA',
    'AMORA',
    'AMORA_MIDRASH',
    'STAM',
    'STAM_MIDRASH',
    'CLEAR',
  ];
  const contentState = editorState.getCurrentContent();
  const contentWithoutStyles = styles.reduce(
    (newContentState, style) =>
      Modifier.removeInlineStyle(
        newContentState,
        editorState.getSelection(),
        style
      ),
    contentState
  );

  const newEditorState = EditorState.push(
    editorState,
    contentWithoutStyles,
    'change-inline-style'
  );

  return newEditorState;
};