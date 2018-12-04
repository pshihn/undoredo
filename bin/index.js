export default class UndoRedo {
    constructor() {
        this.o = [];
        this.c = -1;
    }
    push(op, reverseOp) {
        this.o.splice(this.c + 1);
        this.o.push([op, reverseOp]);
        this.c = this.o.length - 1;
    }
    canUndo() {
        return this.c >= 0;
    }
    canRedo() {
        return !!(this.o.length && (this.c < (this.o.length - 1)));
    }
    undo() {
        return this.canUndo() ? this.o[this.c--][1] : null;
    }
    redo() {
        return this.canRedo() ? this.o[++this.c][0] : null;
    }
}
