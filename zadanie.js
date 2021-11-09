zad.1
z let:
let obj = {};

z const:
const obj: Obj | {};

Słoko kluczowe let deklaruje zmienną w zasięgu bloku, wraz z opcjonalnym zaincjalizowaniem wartością.
Słowo kluczowe const deklaruje stałe w zasięgu bloku, podobne do słowa kluczowego let, ale nie można zmienić wartości tej stałej.
Deklaracja const tworzy referencję typu read-only do wartości.

zad.2
1. Number - Typ liczbowy
Zmienna typu Number może przechowywać liczbę. W odróżnieniu od innych języków programowania nie rozróżniamy tutaj typów liczb całkowitych lub rzeczywistych. Mamy tu do dyspozycji tylko jeden typ liczbowy. Liczby traktowane są wg standardu IEEE 754 dla liczb zmiennoprzecinkowych podwójnej precyzji.

var x = 12       // Liczba całkowita
var y = 3.1415   // Liczba rzeczywista
var z = 12e5     // Liczba 1200000
var u = 12e-5    // Liczba 0.00012

Zapis wyniku 12e5 oznacza liczbę 12 pomnożoną przez 105 (to 12 z pięcioma zerami), natomiast 12e-5 liczbę 12 pomnożoną przez 10-5 (ostatnia cyfra jest na piątym miejscu po przecinku).

2. String - Typ tekstowy
Jest to typ zmiennej, która zawiera tekst - ciąg znaków. Wartość ciągu może być łańcuchem zero lub więcej znaków Unicode (liter, cyfr i znaków interpunkcyjnych). Tekst należy ujmować w apostrofy ('...') lub cudzysłowy ("..."). Podwójne znaki cudzysłowu mogą być zawarte w ciągach znaków objętych pojedynczymi znakami cudzysłowu, a znaki pojedynczego cudzysłowu mogą być zawarte w ciągach znaków, ujętych w podwójny cudzysłów.

var s = "Janek"
var c = 'Bolek';
var n = "I'am a student"
var m = 'Lubię "Gwiezdne Wojny"';

3. Boolean - Typ logiczny
Jest to typ zmiennej, która może przyjmować tylko dwie wartości: True - prawda i False - fałsz. Ten typ będzie z pewnością bardzo często przez ciebie wykorzystywany, szczególnie w instrukcjach warunkowych.

4. Typ undefined
Typ ten jest zwracany w przypadku odwoływania się do właściwości nieistniejącego obiektu, a także w przypadku, gdy odwołujemy się do zmiennej, której nie przypisano wartości, tak jak to widać w poniższym kodzie.

<script>
var a;
alert(a);	    //wyświetla Undefined
</script>

zad.3
isAuthorized = Boolean(false)
isClicked = Boolean(true)
if(isAuthorized && isClicked ==(true)) {
    console.log('Operacja udana');
} else {
    console.log('Operacja nieudana');
}

zad.4
isAuthorized = Boolean(true)
isClicked = Boolean(true)
if(isAuthorized ^ isClicked ==(true)) {
    console.log('Operacja udana');
} else {
    console.log('Operacja nieudana');
}

Zad.5
const x = 'To jest test'
console.log(x.charAt(4));

Zad.6
a)
var s1="Siema,";
var s2="co u ciebie";
var s3="słychać?";
var text=s1.concat(s2,s3);

console.log(text)

b)
var s1="Wszystko ";
var s2="jest ok";
    console.log(s1+s2);
    
Zad.7
var myarr = 'to, jest, test'.split(", ");
let res = myarr.filter(t => ! t.startsWith('t'));
console.log(res);

zad.8

zad.9
Klasy w Javascript zostały wprowadzone w ECMAScript 2015 jako lukier składniowy (ang. syntactic sugar) dla istniejącego, opartego na prototypach modelu dziedziczenia. Składnia klas nie wprowadza nowego zorientowanego obiektowo modelu dziedziczenia. Klasy wprowadzają znacznie prostszą i bardziej czytelną składnię do tworzenia obiektów i dziedziczenia.

Classes UserPersonalInfo {

  Constructor (name) {
  
                  This.name = name;
  
  }
  
  Introduce() {
  
    Console.log(‘Mam na imię ${This.name}’);
  
  }
  
  }
  
  Const Damian = new Person (‘Damian’);
  
  Damian.introduce();

zad.10
Konstruktor jest specjalną metodą tworzenia i inicjowania obiektu utworzonego w klasie.
Konstruktor umożliwia zdefiniowanie inicjalizacji obiektu, która musi się wykonać, zanim będzie można wywołać metody obiektu.
Jeśli niestandardowy konstruktor nie został podany, to domyślny konstruktor będzie użyty. Dla klas bazowych konstruktor domyślny jest pusty: constructor() {}
Dla klas pochodnych domyślny konstruktor wywołuje konstruktor klasy nadrzędnej:

constructor(...args) {
  super(...args);
}

Pozwala to na działanie takiego kodu:

class ValidationError extends Error {

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }

}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // This is Error instead of ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}

Klasa ValidationError nie musi mieć niestandardowego konstruktora, ponieważ domyślny konstruktor wywołuje konstruktor klasy Error.

Jeśli jednak klasa ValidationError ma niestandardowy konstruktor, to musi on wywoływać konstruktor klasy nadrzędnej przy użyciu super:

class ValidationError extends Error {

    constructor(message) {
      super(message);  // call parent class constructor
      this.name = 'ValidationError';
      this.code = '42';
    }
  
    printCustomerMessage() {
       return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
    }
  
  }
  
  try {
    throw new ValidationError("Not a valid phone number");
  } catch (error) {
     if (error instanceof ValidationError) {
      console.log(error.name); // Now this is ValidationError!
      console.log(error.printCustomerMessage());
    } else {
      console.log('Unknown error', error);
      throw error;
    }
  }

  Wewnątrz klasy może być tylko jedna metoda nazwana constructor. Jeżeli constructor wystąpi więcej niż jeden raz, to wygeneruje błąd SyntaxError.

zad.11
Metoda statyczna albo metoda klasowa – metoda klasy, która nie jest wywoływana w kontekście żadnego konkretnego obiektu tej klasy. Metody statyczne z reguły służą do obsługi składowych statycznych klas.

zad.12
Protokół HTTP określa nam dokładnie format komunikacji między serwerem a klientem. Komunikacja ta opiera się na wyżej opisanych żądaniach i odpowiedziach. Protokół HTTP określa po prostu format tychże wiadomości.

Protokół HTTP jest bezstanowy, co oznacza, iż każde spośród zapytań może.zostac zinterpretowane w oderwaniu od reszty.

Poza serwerami i klientami w komunikacji muszą występować dodatkowe węzły. Mogą to być przykładowo serwery, które zachowają kopię odpowiedzi, przyspieszając tym samym komunikację. Mogą to być również elementy sieciowe, które umożliwiają sprawne docieranie żądań do serwera.

W trakcie wpisywania adresu do przeglądarki korzystamy z metody URL

http://kuba:123@www.prostastrona.pl:80/nie/ma/tej?strony=2#identyfikator

Część adresu

Przykładowa wartość

scheme

http

user

kuba

password

123

host

www.prosta.pl

port

80

/path

/nie/ma/tej

?query

?strony=2

#fragment

#identyfikator

 
Metoda PATCH służy do aktualizowania wartości właściwości zasobu.

Metoda DELETE służy do usuwania zasobu określonego przez jego identyfikator URI.

Post służy do wysyłania danych na serwer, takich jak przesyłanie pliku lub przesyłanie niektórych danych lub dodawanie nowego wiersza do tabeli zaplecza do dowolnego formularza internetowego. W prostym zdaniu możemy powiedzieć, że metoda post służy do wstawiania nowych elementów na serwerze zaplecza. W operacji REST CRUD wykonuje operację tworzenia.
