export interface FocusItem {
    title: string;
    body: string;
}

export interface InsightItem {
    imageSrc: string;
    imageAlt: string;
    title: string;
    body: string;
}

export interface HomeData {
    eyebrow: string;
    heading: string;
    description: string;
    focus1: FocusItem;
    focus2: FocusItem;
    focus3: FocusItem;
    focus4: FocusItem;
    insight1: InsightItem;
    insight2: InsightItem;
    insight3: InsightItem;
    insight4: InsightItem;
}
