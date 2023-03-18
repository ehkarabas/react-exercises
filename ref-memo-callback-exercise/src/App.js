import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function App() {
  // * Memo States
  const [numberMemo, setNumberMemo] = useState(0);
  const [darkMemo, setDarkMemo] = useState(false);
  const [loadingMemo, setLoadingMemo] = useState(true);

  // * Callback States
  const [numberCallback, setNumberCallback] = useState(0);
  const [darkCallback, setDarkCallback] = useState(false);
  const [loadingCallback, setLoadingCallback] = useState(true);

  // * Ref States
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  // const [renderCount, setRenderCount] = useState(0); // dependency'siz useEffect'te kullanmak uzere state tanimlamak, sonsuz donguye yol acacaktir.
  const [loadingRef, setLoadingRef] = useState(true);

  function slowFunction(num) {
    console.log("Calling extremely slow function");
    for (let i = 0; i < 2000000000; i++) {}
    return num * 2;
  }

  // * MEMO BLOCK

  // + useMemo'daki dependency array'de belirtilenler degismedigi surece component yeniden render olsa bile useMemo'nun kullanildigi degisken on bellekteki en son hesaplanmis degeri kullanir, bu da yuklu hesaplamalar veya fonksiyon cagrilari iceren durumlarda performansi artirmaktadir.

  // - useEffect ve useMemo icerisindeki state degisiklikleri, hook body'si tamamlanmadan yeniden render'i tetiklemez

  // - useEffect: İçerisindeki state güncellemeleri, etki fonksiyonunun tamamlanmasının ardından bileşeni yeniden render eder. useEffect callback fonksiyonu asenkron olarak çalışır ve React, effect'in tamamlanmasını beklemeksizin bileşeni render etmeye devam eder.

  // + useMemo: İçerisinde yapılan state güncellemeleri, önbelleğe alınmış değer hesaplandıktan sonra bileşeni yeniden render eder. Bu durumda, önbelleğe alınan değer hesaplandıktan sonra React, bileşeni render etmeye devam eder.

  // ? useEffect yan etkileri yönetmek için kullanılırken, useMemo daha çok hesaplamaların önbelleğe alınması ve gereksiz hesaplamaları önlemek için kullanılır.
  // * numberMemo degismedikce slowFunction'in calismamasi saglaniyor
  const doubleNumber = useMemo(() => {
    setLoadingMemo(true);
    const result = slowFunction(numberMemo);
    setLoadingMemo(false);
    return result;
  }, [numberMemo]);

  // ? useMemo kullanmadan component icinde sabit degiskenler tanimlanip bunlardaki degisikliklerin de useEffect ile takip edilmesi isteniyorsa, her yeni render'da degisken yeniden olusturulacagi icin takip dilenen sekilde calismaz. Bunu engellemek icin de useMemo kullanip, dependency array'de belirtilenlere gore degiskenin guncellenmesi(yeniden olusturulmasi) saglanarak takip dilenen sekilde gerceklestirilebilir.
  const themeStylesMemo = useMemo(() => {
    return {
      backgroundColor: darkMemo ? "black" : "white",
      color: darkMemo ? "white" : "black",
    };
  }, [darkMemo]);

  useEffect(() => {
    setLoadingMemo(true);
    const timer = setTimeout(() => {
      setLoadingMemo(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [darkMemo, numberMemo]);

  // * themeStylesMemo'nun kac kez olusturuldugu takip ediliyor
  useEffect(() => {
    console.log("Memo theme changed");
  }, [themeStylesMemo]);

  // * CALLBACK BLOCK

  // - useMemo ve useCallback React Hook'ları, performansı optimize etmek için kullanılır, ancak farklı amaçlarla kullanılır.

  // - useMemo bir değerin önbelleğe alınması ve gereksiz hesaplamaların önlenmesi için kullanılır. dependency'de belirtilenler değişmedikçe hesaplanan değer yeniden kullanilir. useMemo bir değer döndürür. Kisaca useMemo value cache'ler. Ornek kullanim -> Yüksek yuklu hesaplamaların sonuçlarını önbelleğe almak ve yeniden hesaplama yapmamak.

  // - useMemo ve useCallback tamamen ayni sekilde tanimlanir, ancak biri deger digeri fonksiyon dondurur.

  // - const varName = useCallback/useMemo = (()=>{return [number,number+1,number+2]},[number])

  // - useCallback -> ()=>{return [number,number+1,number+2]} -> fonksiyon dondurur

  // - useMemo -> [number, number+1, number+2] -> deger dondurur

  //  + useCallback bir fonksiyonun önbelleğe alınması ve gereksiz yeniden render'ların önlenmesi için kullanılır. dependency'de belirtilenler değişmedikçe fonksiyon referansı yeniden kullanilabilir. useCallback bir fonksiyon döndürür. Kisaca useCallback function cache'ler. Ornek kullanim -> Bir alt bileşene iletilen fonksiyonun referansını sabitlemek ve gereksiz yeniden render'ları önlemek.

  // aslinda useMemo ile olusturuluyor, yani degeri donduruyor, proje butunlugu acisindan useEffect ile ayrica takip etmek icin ayri olarak tanimlandi
  const themeStylesCallback = useMemo(() => {
    return {
      backgroundColor: darkCallback ? "black" : "white",
      color: darkCallback ? "white" : "black",
    };
  }, [darkCallback]);

  // ? useCallback kullanmadan component icinde sabit bir fonksiyon tanimlanip dondurdugu degerler degistikce de useEffect ile takip edilmesi isteniyorsa, her yeni render'da fonksiyon yeniden olusturulacagi icin takip dilenen sekilde calismaz. Bunu engellemek icin de useCallback kullanip, dependency array'de belirtilenlere gore fonksiyonun guncellenmesi(yeniden olusturulmasi) saglanarak takip dilenen sekilde gerceklestirilebilir.
  const getItems = useCallback(
    (incrementor = 1) => {
      return [
        numberCallback + incrementor,
        numberCallback + incrementor + 1,
        numberCallback + incrementor + 2,
      ];
    },
    [numberCallback]
  );

  useEffect(() => {
    setLoadingCallback(true);
    const timer = setTimeout(() => {
      setLoadingCallback(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [darkCallback, numberCallback]);

  // * getItems'in kac kez calistirildigi takip ediliyor
  useEffect(() => {
    console.log("Callback items changed");
  }, [getItems]);

  // * themeStylesCallback'in kac kez olusturuldugu takip ediliyor
  useEffect(() => {
    console.log("Callback theme changed");
  }, [themeStylesCallback]);

  // * REF BLOCK

  // + useRef, genellikle bir DOM elementine başvuruda bulunmak veya değerleri bileşenler arasında saklamak için kullanılır. useRef hook'unun iki ana kullanım amacı vardır:

  // + 1.) DOM elemanlarına başvurmak(sik kullanim tipi): Bazen DOM üzerinde doğrudan manipülasyon yapmanız gerekebilir, örneğin bir giriş (input) alanına odaklanma, bir video oynatıcıyı kontrol etme veya özel bir animasyon uygulama. Bu durumda, useRef kullanarak DOM düğümüne bir referans oluşturabilir ve bu referansı işlemler için kullanabilirsiniz.

  // + 2.) Değişken değerleri saklamak(degisime yol acmayan state gibi): useRef aynı zamanda, state'lerdeki degisimlerin aksine, sayfayı yeniden render etmeden bileşenler arasında değer saklamak için kullanılabilir. Bu, özellikle zamana bağlı değişkenler veya birden fazla render arasında tutarlılığı korumak istediğiniz değerler için kullanışlıdır.

  // * input'a focuslanmak icin useRef kullanimi(1. kullanima ornek)
  const inputRef = useRef(null);

  // * bir butona tiklayarak baska bir butona da tiklamis gibi yapmak icin useRef kullanimi(1. kullanima ornek)
  const buttonRef = useRef(null);

  // * dependency'siz useEffect'te kullanmak uzere state'e alternatif olarak yeniden render'a yol acmayacak depolama degiskeni olusturmak icin useRef kullanimi(2. kullanima ornek)
  const renderCountRef = useRef(0);

  // * bir state'in onceki degerini takip etmek icin useRef kullanimi(2. kullanima ornek)
  const prevName = useRef("");

  // * bir state'in onceki degerini takip etmek icin useRef kullanimi(2. kullanima ornek)
  const prevInput = useRef("");

  const handleFocusRefInput = () => {
    inputRef.current.focus();
  };

  const handleClickRefButton = (e) => {
    // `current` DOM düğümüne erişmenizi sağlar.
    e.preventDefault();
    buttonRef.current.click();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== inputValue && e.currentTarget.children[0].value !== "") {
      // * bir state'in degismeden onceki degeri saklaniyor
      prevName.current = name;
      setName(inputValue);
      console.log("Name setted");
      setInputValue("");
    }
  };

  useEffect(() => {
    setLoadingRef(true);
    console.log("Name changed:", name);
    const timer = setTimeout(() => {
      setLoadingRef(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [name]);

  // * ref block'unun toplam kac kez render alindigi takip ediliyor
  useEffect(() => {
    renderCountRef.current += 1;
  }, [name, inputValue]);

  // * inputValue her degistiginde useEffect render'dan sonra calisacagi icin ve prevInput degisikligi yeniden render'a neden olmayacagi icin hep bir onceki degeri render'lamis olur.
  useEffect(() => {
    prevInput.current = inputValue;
  }, [inputValue]);

  return (
    <div className="App">
      <small className="flex justify-center items-center mt-2">
        <i>Check console to track changes</i>
      </small>
      <div className="useMemo w-40 mx-auto p-4 flex flex-col gap-5 items-center">
        <h1 className="uppercase text-xl font-bold">useMemo</h1>
        {loadingMemo ? (
          <div className="h-36 w-32 flex justify-center items-center">
            <h1 className="text-lg text-center font-extrabold uppercase">
              rendering memo...
            </h1>
          </div>
        ) : (
          <>
            <input
              type="number"
              className="w-32 text-center"
              value={numberMemo}
              onChange={(e) => {
                setNumberMemo(parseInt(e.target.value));
              }}
            />
            <button
              className="inline-block rounded w-32 bg-slate-300 px-3 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              onClick={() => {
                setDarkMemo(!darkMemo);
              }}
            >
              Toggle Theme
            </button>
            <div className="text-center w-32 break-all" style={themeStylesMemo}>
              {doubleNumber}
            </div>
          </>
        )}
      </div>
      <hr className="mt-5 w-40 mx-auto h-[2px] bg-red-700 border-none" />

      <div className="useCallback w-40 mx-auto p-4 flex flex-col gap-5 items-center my-4">
        <h1 className="uppercase text-xl font-bold">usecallback</h1>
        {loadingCallback ? (
          <div className="h-44 w-32 flex justify-center items-center">
            <h1 className="text-lg text-center font-extrabold uppercase">
              rendering callback...
            </h1>
          </div>
        ) : (
          <>
            <input
              type="number"
              className={`w-32 text-center text-${
                darkCallback ? "red-700" : "black"
              }`}
              value={numberCallback}
              onChange={(e) => {
                setNumberCallback(parseInt(e.target.value));
              }}
            />
            <button
              className="inline-block rounded w-32 bg-slate-300 px-3 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              onClick={() => {
                setDarkCallback(!darkCallback);
              }}
            >
              Toggle Theme
            </button>
            <ul className="w-32 mx-auto" style={themeStylesCallback}>
              {getItems().map((number, index) => (
                <li className="text-center" key={`number_${index + 1}`}>
                  {number}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <hr className="mt-5 w-40 mx-auto h-[2px] bg-red-700 border-none" />

      <div className="useRef w-40 mx-auto p-4 flex flex-col gap-5 items-center my-4">
        <h1 className="uppercase text-xl font-bold">useref</h1>
        {loadingRef ? (
          <div className="h-[23.5rem] w-32 flex justify-center items-center">
            <h1 className="text-lg text-center font-extrabold uppercase">
              rendering name...
            </h1>
          </div>
        ) : (
          <>
            <form
              className="flex flex-col items-center gap-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="w-32 text-center text-black"
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="inline-block rounded w-32 bg-slate-300 px-3 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                onClick={handleFocusRefInput}
              >
                Focus Input
              </button>

              <button
                className="inline-block rounded w-32 bg-slate-300 px-3 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                onClick={(e) => {
                  handleClickRefButton(e);
                }}
              >
                Click Set Name
              </button>

              <button
                type="submit"
                ref={buttonRef}
                className="inline-block rounded w-32 bg-slate-300 px-3 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              >
                Set Name
              </button>
            </form>
            {/* bir state'in degismeden onceki degeri render'laniyor */}
            <p className="break-all">Prev. Input: {prevInput.current}</p>
            <p className="break-all">Prev. Name: {prevName.current}</p>
            <p className="break-all">Name: {name}</p>
            <p>Rendered: {renderCountRef.current}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
