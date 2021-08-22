export class LoadItem {
    constructor(public keyWord: string) {}
    static readonly type = '[YMCA] Items';
}

export class updateFilterTrigger {
    static readonly type = '[YMCA] Trigger updated';
}

export class SortByKeyWord {
    constructor(public keyWord: string) {}
    static readonly type = '[YMCA] Sorted by key';
}

export class SortByDate {
    static readonly type = '[YMCA] Sorted by date';
}

export class SortByViewers {
    static readonly type = '[YMCA] Sorted by viewers';
}

export class SelectItem {
    constructor(public id: string) {}
    static readonly type = '[YMCA] Selected item is changed';
}

export class ClearSelectedItem {
    static readonly type = '[YMCA] Clear selected item';
}

export class ChangeLoginTrigger {
    static readonly type = '[YMCA] Change Login Trigger';
}