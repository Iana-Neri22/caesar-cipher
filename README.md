# Cifra de César

## Prefácio

O usuário está organizando uma festa surpresa para o aniversário de sua mãe através de um grupo do whatsaap,o problema é que as vezes ela utiliza seu celular. Como a festa é surpresa ele precisa enviar mensagens de forma que sua mãe não as entenda. Por isso foi criada essa aplicação que permite que mensagens sejam criptografadas e descriptografadas.

## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa substituição.

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

### Definição do produto
 O que é?
Esse site permite ao usuário inserir mensagens para serem criptografadas e descriptografadas.

Como usar? 
Para utilizar essa aplicação basta inserir o número de deslocamento desejado e a mensagem ao qual deseja criptografar/descriptografar. A mensagem criptografada/descriptografada é então exibida na tela.  

 Como funciona?
Para permitir a criptografia e descriptografia das mensagens foi criada uma função que utiliza o algoritmo da Cifra de César, ela criptografa e descriptografa a mensagem inserida pelo usuário, de acordo com a chave de deslocamento inserido.  Por exemplo, inserindo a mensagem “abc” com o deslocamento  1  para criptografar, o resultado é “bcd”. O resultado é exibido na tela.

![Fluxograma](https://github.com/Iana-Neri22/caesar-cipher/blob/master/src/imagens/Diagrama%20-%20Cipher.jpeg)