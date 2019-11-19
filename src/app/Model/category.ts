export interface Category {
    id?: string;
    Title?: string;
}

export interface Card {
    id?: string;
    Category?: string;
    Content?: string;
    Title?: string;
}

export interface Suggestion {
    id?: string;
    Name?: string;
    Email?: string;
    Subject?: string;
    Feedback?: string;
    rate?: string;
}

export interface Contact {
    id?: string;
    Name?: string;
    Email?: string;
    Subject?: string;
    Message?: string;
}

export interface Profile {
    id?: string;
    Name?: string;
    Email?: string;
    Contact?: string;
    DOB?: string;
}

export interface Todo {
    id?: string;
    Title?: string;
    Content}