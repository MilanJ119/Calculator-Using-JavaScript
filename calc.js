z = "";
        function back() {
            z = z.substring(0, z.length - 1);
            document.getElementById('t1').value = z;
        }
        function c() {
            z ="";
            document.getElementById('t1').value = z;
        }
        function upon() {
            z = 1 / z;
            document.getElementById('t1').value = z;
        }
        function sqrt() {
            z = Math.sqrt(z);
            document.getElementById('t1').value = z;

        }
        // ....................................................................................................................

        function val9() {
            z = z + document.getElementById('9').value;
            document.getElementById('t1').value = z;
        }
        function val8() {
            z = z + document.getElementById('8').value;
            document.getElementById('t1').value = z;
        }
        function val7() {
            z = z + document.getElementById('7').value;
            document.getElementById('t1').value = z;
        }
        function add() {
            z = z + document.getElementById('add').value;
            document.getElementById('t1').value = z;
        }
        // ................................................................................................................
        function val6() {
            z = z + document.getElementById('6').value;
            document.getElementById('t1').value = z;
        }
        function val5() {
            z = z + document.getElementById('5').value;
            document.getElementById('t1').value = z;
        }
        function val4() {
            z = z + document.getElementById('4').value;
            document.getElementById('t1').value = z;
        }
        function sub() {
            z = z + document.getElementById('sub').value;
            document.getElementById('t1').value = z;
        }
        // ................................................................................................................
        function val3() {
            z = z + document.getElementById('3').value;
            document.getElementById('t1').value = z;
        }
        function val2() {
            z = z + document.getElementById('2').value;
            document.getElementById('t1').value = z;
        }
        function val1() {
            z = z + document.getElementById('1').value;
            document.getElementById('t1').value = z;
        }
        function mul() {
            z = z + document.getElementById('mul').value;
            document.getElementById('t1').value = z;
        }
        // ................................................................................................................
        function dot() {
            z = z + document.getElementById('dot').value;
            document.getElementById('t1').value = z;
        }
        function val0() {
            z = z + document.getElementById('0').value;
            document.getElementById('t1').value = z;
        }
        function equals() {
            document.getElementById('t1').value = "" + eval(z);
            z = document.getElementById('t1').value;

        }
        function div() {
            z = z + document.getElementById('div').value;
            document.getElementById('t1').value = z;
        }