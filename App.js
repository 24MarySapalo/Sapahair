
    function validarFormulario(){
        var nomeProduto = document.forms["formCadastro"]["nome"].value;
        if (nomeProduto == "") {
            alert("Favor informar o seu produto!");
            return false;     
        }
       
        else{
            alert("O seu pedito foi realizado com sucesso, produto: " + nomeProduto + +quantidadeProduto+ " !");
            return true;
        }
    }
