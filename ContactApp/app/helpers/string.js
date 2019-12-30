String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.toPhoneNumber = function() {
    const modText = this.replace(/[^\d]/g, '');
    return modText.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
}