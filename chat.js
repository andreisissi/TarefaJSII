/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */
    console.log('contrução chat usando JS');

    //Array para armazenar mensagens
    let listaMensagens = [];

    //função de armazenamento de mensagem no array
    function adicionarMensagem(apelido, mensagem) 
    {
      listaMensagens.push ({

        apelido: apelido,
        mensagem: mensagem

      });
    }

    //função de formatação HTML
    function formatarMensagens ()
    {
      let htmlData = '';

      for (let i = 0; i < listaMensagens.length; i++)
      {
        let mensagem = listaMensagens[i];

        htmlData += `<div class="chat-message">
        `;
        htmlData +=`<span class="chat-message-apelido">` + mensagem.apelido + `</span>`
        ;

        htmlData +=`<span class="chat-message-item">` + mensagem.mensagem + `</span>`
        ;
        htmlData += `</div>`
        ;
      }

      return htmlData;
    }

    //função de atualização da div em HTML
    function atualizarHTML ()
    {
      let chatMessages = document.getElementById('chat-messages');
      chatMessages.innerHTML = formatarMensagens();
      
      window.addEventListener('load', function () { atualizarHTML();
      });

    }

    //Função de funcionalidade do botão
    function commitMessageClickHandler () 
    {
      let input = document.getElementById('message-input');

      if (input.value.trim().length == 0)
      {
        input.focus();
        return;
      }

      adicionarMensagem('Stackx', input.value);
      atualizarHTML();
      document.getElementById('message-input').value = ``;


    }


// Exemplo: function minhaFuncao() { ... }
    

// --------------------------------
// Não remover estas linhas
// --------------------------------

module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------