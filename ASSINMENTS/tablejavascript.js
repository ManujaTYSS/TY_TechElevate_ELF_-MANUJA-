function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 2; j++) {
        if (i == 2 && j == 1) {
          break
        } else {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode('\u0020'))
          i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
          tr.appendChild(td)
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }
  createElement([
    {name:'banana',price:'3'},
    {name:'apple',price:'8'}
  ],
  ['name','price'],['name','price']);
//   tableCreate();
//    document.getElementById('tableid').innerHTML =
//    `<table>
//         <tr>
//             <td>name</td>
//             <td>age</td>
//             <td>gender</td>
//         </tr>
//         <tr>
//             <td>manu</td>
//             <td>21</td>
//             <td>female</td>
//         </tr>
//         <tr>
//             <td>thanu</td>
//             <td>21</td>
//             <td>female</td>
//         </tr>
//     </table>`
// document.body.appendChild("tableid");

   
   
   