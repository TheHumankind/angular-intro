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
