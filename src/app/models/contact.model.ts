export interface ContactLabels {
    name: string;
    email: string;
    message: string;
    submit: string;
}

export interface ContactPlaceholders {
    name: string;
    email: string;
    message: string;
}

export interface ContactErrors {
    name: string;
    email: string;
    message: string;
}

export interface ContactData {
    eyebrow: string;
    heading: string;
    labels: ContactLabels;
    placeholders: ContactPlaceholders;
    errors: ContactErrors;
    successMessage: string;
}
