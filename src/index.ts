export default class UndoRedo<T> {
  private o: [T, T][] = [];
  private c = -1;

  push(op: T, reverseOp: T): void {
    this.o.splice(this.c + 1);
    this.o.push([op, reverseOp]);
    this.c = this.o.length - 1;
  }

  canUndo(): boolean {
    return this.c >= 0;
  }

  canRedo(): boolean {
    return !!(this.o.length && (this.c < (this.o.length - 1)));
  }

  undo(): T | null {
    return this.canUndo() ? this.o[this.c--][1] : null;
  }

  redo(): T | null {
    return this.canRedo() ? this.o[++this.c][0] : null;
  }
}