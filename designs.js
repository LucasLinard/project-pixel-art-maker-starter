// Select color input
colorPicker = $('#colorPicker');
console.log(colorPicker);

// Select size input
inputHeight = $('#input_height');
inputWidth = $('#input_width');
// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // Select Table
    table = $('#pixel_canvas');
    table.empty();

    rows = inputHeight.val();
    columns =  inputWidth.val();

    for (row = 0; row < rows; row++) {
        // Create one <tr>
        tr = $("<tr> </tr>");

        for (column = 0; column < columns; column++) {
            // Create one <td> and add it to the previous <tr>
            td = $("<td> </td>");
            td.click(function() {
                console.log(colorPicker.val());
               $( this ).css('background-color', colorPicker.val() );
            });
            tr.append(td);
        }
        // Add the <tr> to the <table>
        table.append(tr);
    }
}
document.getElementById("sizePicker").addEventListener("submit", function(evt) {
    evt.preventDefault();
    makeGrid();
});