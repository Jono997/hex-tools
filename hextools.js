conversion_formats = [
    "ASCII",
    "Hex",
    "UTF-8",
    "Unicode",
    "Decimal",
    "Binary",
    "Octal",

];

for (dropdown of document.getElementsByClassName("convert-options"))
{
    for (format of conversion_formats)
    {
        var element = document.createElement("option");
        element.value = element.innerHTML = format;
        dropdown.appendChild(element);
    }
}