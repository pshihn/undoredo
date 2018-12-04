export default class UndoRedo<T> {
    private o;
    private c;
    push(op: T, reverseOp: T): void;
    canUndo(): boolean;
    canRedo(): boolean;
    undo(): T | null;
    redo(): T | null;
}
