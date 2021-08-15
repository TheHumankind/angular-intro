export class LoadItem {
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
    constructor() {}
    static readonly type = '[YMCA] Sorted by date';
}

export class SortByViewers {
    constructor() {}
    static readonly type = '[YMCA] Sorted by viewers';
}

export class SelectItem {
    constructor(public id: string) {}
    static readonly type = '[YMCA] Selected item is changed';
}

export class ClearSelectedItem {
    constructor() {}
    static readonly type = '[YMCA] Clear selected item';
}