function noWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const isWhitespace = (control.value || '').trim().length === 0;
        return isWhitespace ? { 'whitespace': true } : null;
    };
}
