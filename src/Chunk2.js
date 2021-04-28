import React from 'react';
import './Chunk.css';
import TextareaAutosize from 'react-autosize-textarea';
// import Note from './Note';

const RenderChunks = (state, handleTextChange) => {
  const chunks = state.order.map((id) => (
    <TextareaAutosize
      id={id}
      class="chunk"
      style={{ marginRight: state.indents[id] * 10 }}
      onSelect={() => {
        handleTextChange(id);
      }}
      onChange={() => {
        handleTextChange(id);
      }}
      onClick={() => {
        handleTextChange(id);
      }}
      value={state.txts[id]}
    />
  ));
  return chunks;
};

class Chunk2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caret: -1,
      activeId: 'id1',
      order: ['id1'],
      indents: { id1: 0 },
      txts: { id1: '' },
    };
    this.totalChunks = 1;
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSplit = this.handleSplit.bind(this);
    this.handleMergeUp = this.handleMergeUp.bind(this);
    this.handleTabOut = this.handleTabOut.bind(this);
    this.handleTabIn = this.handleTabIn.bind(this);
  }

  handleTextChange(id) {
    // update text, caret, activeId
    // preserve the "\n" character
    const e = document.activeElement;
    const txt = e.value.replace(/\n\r?/g, '<br />');
    // const updatedChunks = { ...this.state.chunks };
    const updatedTxts = { ...this.state.txts, [id]: txt };
    // updatedChunks[id].txt = txt;
    this.setState({
      txts: updatedTxts,
      caret: e.selectionStart,
      activeId: id,
    });
  }

  handleSplit() {
    const id = this.state.activeId;
    const idx = this.state.order.indexOf(id);
    this.totalChunks += 1;
    const id2 = `id${this.totalChunks}`;
    const caret = this.state.caret;
    const textOne = this.state.txts[id].substr(0, caret);
    const textTwo = this.state.txts[id].substr(caret);
    const newOrder = [...this.state.order];
    newOrder.splice(idx + 1, 0, id2);

    this.setState((prevState) => ({
      activeId: id2,
      txts: { ...prevState.txts, [id]: textOne, [id2]: textTwo },
      indents: { ...prevState.indents, [id2]: 0 },
      order: newOrder,
    }));
  }

  handleMergeUp() {
    const id = this.state.activeId;
    const idx = this.state.order.indexOf(id);
    if (idx === 0) {
      // not possible to merge up first chunk
      return 0;
    }
    const id2 = this.state.order[idx - 1];
    const txt = this.state.txts[id];
    const newOrder = [...this.state.order];
    newOrder.splice(idx, 1);

    this.setState({
      activeId: id2,
      txts: { ...this.state.txts, [id2]: this.state.txts[id2] + txt },
      indents: {
        ...this.state.indents,
        [id2]: this.state.indents[id2],
        [id]: null,
      },
      order: newOrder,
    });
  }

  handleTabOut() {
    const id = this.state.activeId;
    this.setState({
      indents: { ...this.state.indents, [id]: this.state.indents[id] + 1 },
    });
  }

  handleTabIn() {
    const id = this.state.activeId;
    this.setState({
      indents: { ...this.state.indents, [id]: this.state.indents[id] - 1 },
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleSplit}>
          split
        </button>
        <button type="button" onClick={this.handleMergeUp}>
          merge up
        </button>
        <button type="button" onClick={this.handleTabOut}>
          &lt;&lt;&lt;
        </button>
        <button type="button" onClick={this.handleTabIn}>
          &gt;&gt;&gt;
        </button>
        {RenderChunks(this.state, this.handleTextChange)}
        {this.state.caret}
        {this.state.activeId}
        {this.state.order}
      </div>
    );
  }
}
export default Chunk2;
