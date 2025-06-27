import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  const [dailyVerse, setDailyVerse] = useState({ text: '', reference: '' });

  // Array de versículos para rotação diária
  const verses = [
    {
      text: "Traze estas coisas à memória, ordenando-lhes diante do Senhor que não tenham contendas de palavras, que para nada aproveitam e são para perversão dos ouvintes.",
      reference: "2 Timóteo 2:14"
    },
    {
      text: "Toda Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça.",
      reference: "2 Timóteo 3:16"
    },
    {
      text: "Lâmpada para os meus pés é a tua palavra e, luz para os meus caminhos.",
      reference: "Salmos 119:105"
    },
    {
      text: "Porque a palavra de Deus é viva, e eficaz, e mais cortante do que qualquer espada de dois gumes.",
      reference: "Hebreus 4:12"
    },
    {
      text: "Santifica-os na verdade; a tua palavra é a verdade.",
      reference: "João 17:17"
    },
    {
      text: "Para sempre, ó Senhor, a tua palavra permanece no céu.",
      reference: "Salmos 119:89"
    },
    {
      text: "A relva murcha, e cai a sua flor, mas a palavra de nosso Deus permanece eternamente.",
      reference: "Isaías 40:8"
    },
    {
      text: "Bem-aventurado o homem que não anda segundo o conselho dos ímpios, não se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores.",
      reference: "Salmos 1:1"
    },
    {
      text: "Antes, o seu prazer está na lei do Senhor, e na sua lei medita de dia e de noite.",
      reference: "Salmos 1:2"
    },
    {
      text: "Porque o Senhor conhece o caminho dos justos, mas o caminho dos ímpios perecerá.",
      reference: "Salmos 1:6"
    },
    {
      text: "Ensina-me, Senhor, o teu caminho, e andarei na tua verdade; dispõe o meu coração para temer o teu nome.",
      reference: "Salmos 86:11"
    },
    {
      text: "Como purificará o jovem o seu caminho? Observando-o conforme a tua palavra.",
      reference: "Salmos 119:9"
    },
    {
      text: "No princípio criou Deus os céus e a terra.",
      reference: "Gênesis 1:1"
    },
    {
      text: "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
      reference: "Josué 1:9"
    },
    {
      text: "O Senhor não vê como vê o homem, pois o homem vê o que está diante dos olhos, porém o Senhor olha para o coração.",
      reference: "I Samuel 16:7"
    },
    {
      text: "A alegria do Senhor é a vossa força.",
      reference: "Neemias 8:10"
    },
    {
      text: "Se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face, e se desviar dos seus maus caminhos, então eu ouvirei do céu, e perdoarei os seus pecados, e sararei a sua terra.",
      reference: "II Crônicas 7:14"
    },
    {
      text: "Uns confiam em carros e outros em cavalos, mas nós faremos menção do nome do Senhor nosso Deus.",
      reference: "Salmos 20:7"
    },
    {
      text: "O Senhor é o meu pastor, nada me faltará.",
      reference: "Salmos 23:1"
    },
    {
      text: "Esperei ansiosamente pelo Senhor, e ele se inclinou para mim, e ouviu o meu clamor.",
      reference: "Salmos 40:1"
    },
    {
      text: "Bem-aventurado é aquele que atende ao pobre; o Senhor o livrará no dia do mal.",
      reference: "Salmos 41:1"
    },
    {
      text: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
      reference: "Salmos 46:1"
    },
    {
      text: "A minha alma espera somente em Deus; dele vem a minha salvação.",
      reference: "Salmos 62:1"
    },
    {
      text: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
      reference: "Salmos 91:1"
    },
    {
      text: "Os que confiam no Senhor serão como o monte de Sião, que não se abala, mas permanece para sempre.",
      reference: "Salmos 125:1"
    },
    {
      text: "Grandes coisas fez o Senhor por nós, por isso estamos alegres.",
      reference: "Salmos 126:3"
    },
    {
      text: "Os que semeiam em lágrimas segarão com alegria.",
      reference: "Salmos 126:5"
    },
    {
      text: "Quão bom e quão suave é que os irmãos vivam em união.",
      reference: "Salmos 133:1"
    },
    {
      text: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.",
      reference: "Provérbios 3:5"
    },
    {
      text: "Reconhece o Senhor nos teus caminhos e Ele endireitará as tuas veredas.",
      reference: "Provérbios 3:6"
    },
    {
      text: "Sobre tudo o que se deve guardar, guarda o teu coração, pois dele procedem as saídas da vida.",
      reference: "Provérbios 4:23"
    },
    {
      text: "Por isso não temas, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa.",
      reference: "Isaías 41:10"
    },
    {
      text: "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto.",
      reference: "Isaías 55:6"
    },
    {
      text: "Eu sei que pensamentos tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que desejais.",
      reference: "Jeremias 29:11"
    },
    {
      text: "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas serão acrescentadas a vocês.",
      reference: "Mateus 6:33"
    },
    {
      text: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
      reference: "Mateus 11:28"
    },
    {
      text: "Indo, portanto, fazei discípulos de todas as nações, batizando-os em nome do Pai, do Filho e do Espírito Santo.",
      reference: "Mateus 28:19"
    },
    {
      text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito para que todo que nele crê não pereça, mas tenha vida eterna.",
      reference: "João 3:16"
    },
    {
      text: "Conhecereis a verdade e a verdade vos libertará.",
      reference: "João 8:32"
    },
    {
      text: "Jesus respondeu: ‘Eu sou o caminho, a verdade e a vida Ninguém vem ao Pai senão por mim.",
      reference: "João 14:6"
    },
    {
      text: "Pois o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor.",
      reference: "Romanos 6:23"
    },
    {
      text: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
      reference: "Romanos 8:28"
    },
    {
      text: "Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?",
      reference: "Romanos 8:31"
    },
    {
      text: "Porque estou certo de que nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir, nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus, nosso Senhor!",
      reference: "Romanos 8:38-39"
    },
    {
      text: "O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se ensoberbece. Não se porta com indecência, não busca os seus interesses, não se irrita, não suspeita mal; não folga com a injustiça, mas folga com a verdade; tudo sofre, tudo crê, tudo espera, tudo suporta.",
      reference: "I Coríntios 13:4-7"
    },
    {
      text: "Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança. Contra estas coisas não há lei.",
      reference: "Gálatas 5:22-23"
    },
    {
      text: "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie.",
      reference: "Efésios 2:8-9"
    },
    {
      text: "Posso todas as coisas naquele que me fortalece.",
      reference: "Filipenses 4:13"
    },
    {
      text: "Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.",
      reference: "II Timóteo 1:7"
    },
    {
      text: "Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem.",
      reference: "Hebreus 11:1"
    },
    {
      text: "Olhando para Jesus, autor e consumador da fé, o qual, pelo gozo que lhe estava proposto, suportou a cruz, desprezando a afronta, e assentou-se à destra do trono de Deus.",
      reference: "Hebreus 12:2"
    },
    {
      text: "E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e o não lança em rosto, e ser-lhe-á dada.",
      reference: "Tiago 1:5"
    },
    {
      text: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
      reference: "I Pedro 5:7"
    },
    {
      text: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça.",
      reference: "I João 1:9"
    },
    {
      text: "Aquele que não ama não conhece a Deus; porque Deus é amor.",
      reference: "I João 4:8"
    },
    {
      text: "Eis que estou à porta, e bato; se alguém ouvir a minha voz, e abrir a porta, entrarei em sua casa, e com ele cearei, e ele comigo.",
      reference: "Apocalipse 3:20"
    },
    {
      text: "Deleita-te também no Senhor, e te concederá os desejos do teu coração.",
      reference: "Salmos 37:4"
    },
    {
      text: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",
      reference: "Salmos 37:5"
    },
    {
      text: "Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto.",
      reference: "Salmos 51:10"
    },
    {
      text: "O coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos.",
      reference: "Provérbios 16:9"
    },
    {
      text: "Tu conservarás em paz aquele cuja mente está firme em ti; porque ele confia em ti.",
      reference: "Isaías 26:3"
    },
    {
      text: "As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim; Novas são cada manhã; grande é a tua fidelidade.",
      reference: "Lamentações 3:22-23"
    }
  ];

  useEffect(() => {
    // Calcula o índice baseado na data atual
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const verseIndex = dayOfYear % verses.length;
    
    setDailyVerse(verses[verseIndex]);
  }, []);
  return (
    <>
      <h1 className="welcome">Bem-vindo!</h1>
      <div className="verse-section">
        <h2>Versículo do dia:</h2>
        <blockquote className="verse">
          "{dailyVerse.text}"
        </blockquote>
        <p className="verse-reference">{dailyVerse.reference}</p>
      </div>
    </>
  );
};

export default HomePage;