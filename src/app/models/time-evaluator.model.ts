export interface TimeEvaluatorLabels {
    profile: string;
    name: string;
    lastName: string;
    age: string;
    notes: string;
    studyHours: string;
    workHours: string;
    gamingHours: string;
    socialHours: string;
    result: string;
    productive: string;
    productiveHours: string;
    hours: string;
    recommendation: string;
    pdfButton: string;
}

export interface TimeEvaluatorPlaceholders {
    name: string;
    lastName: string;
    age: string;
    notes: string;
}

export interface TimeEvaluatorOptions {
    estudiante: string;
    teletrabajador: string;
    gamer: string;
}

export interface TimeEvaluatorPdf {
    title: string;
    userDataTitle: string;
    timeDataTitle: string;
    resultTitle: string;
    recommendationTitle: string;
    notesLabel: string;
}

export interface TimeEvaluatorMessages {
    estudianteAlto: string;
    estudianteMedio: string;
    estudianteBajo: string;
    teletrabajadorAlto: string;
    teletrabajadorMedio: string;
    teletrabajadorBajo: string;
    gamerAlto: string;
    gamerMedio: string;
    gamerBajo: string;
}

export interface TimeEvaluatorData {
    sectionKicker: string;
    heading: string;
    description: string;
    labels: TimeEvaluatorLabels;
    placeholders: TimeEvaluatorPlaceholders;
    options: TimeEvaluatorOptions;
    pdf: TimeEvaluatorPdf;
    messages: TimeEvaluatorMessages;
}
