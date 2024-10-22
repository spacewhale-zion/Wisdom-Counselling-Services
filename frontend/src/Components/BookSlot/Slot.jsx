import React from 'react';
import Slotcard from './Slotcard';
import '../BookSlot/slot.css';

function Slot() {
  return (
    <div className="slot-container">
      <h1>Book your slot in just 4 easy <br />steps</h1>
      <div className="slot-steps">
        <Slotcard />
        <div className="slotarrow">→</div> {/* Arrow between cards */}
        <Slotcard />
        <div className="slotarrow">→</div>
        <Slotcard />
        <div className="slotarrow">→</div>
        <Slotcard />
      </div>
    </div>
  );
}

export default Slot;
