const programmingLanguages = [
  {
    name: "Python",
    options: {
      field: "AI, Backend",
      year: 1991,
      developer: "Guido van Rossum",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    options: {
      field: "Enterprise Applications, Backend",
      year: 1995,
      developer: "Sun Microsystems",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    options: {
      field: "Web Development, Frontend, Superset of ECMAScript",
      year: 1995,
      developer: "Brendan Eich",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "C++",
    options: {
      field: "Game Development",
      year: 1983,
      developer: "Bjarne Stroustrup",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "C#",
    options: {
      field: "Windows Apps",
      year: 2000,
      developer: "Microsoft",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "PHP",
    options: {
      field: "Web Development, Backend",
      year: 1995,
      developer: "Rasmus Lerdorf",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "R",
    options: {
      field: "Data Science, Backend",
      year: 1993,
      developer: "Ross Ihaka, Robert Gentleman",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  },
  {
    name: "Swift",
    options: {
      field: "macOS/iOS Apps",
      year: 2014,
      developer: "Apple Inc.",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },
  {
    name: "Objective-C",
    options: {
      field: "macOS/iOS Apps",
      year: 1984,
      developer: "Tom Love, Brad Cox",
    },
    src: "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
  },
  {
    name: "SQL",
    options: {
      field: "Database Management, Backend",
      year: 1974,
      developer: "Donald D. Chamberlin, Raymond F. Boyce",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "TypeScript",
    options: {
      field: "Web Development, Frontend, Superset of ECMAScript",
      year: 2012,
      developer: "Microsoft",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Kotlin",
    options: {
      field: "Android Apps, Backend",
      year: 2011,
      developer: "JetBrains",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Go",
    options: {
      field: "System Programming, Backend",
      year: 2009,
      developer: "Google",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Ruby",
    options: {
      field: "Web Development, Backend",
      year: 1995,
      developer: "Yukihiro Matsumoto",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  },
  {
    name: "MATLAB",
    options: {
      field: "Numerical Computing, AI, Data Analysis",
      year: 1984,
      developer: "MathWorks",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  },
  {
    name: "Scala",
    options: {
      field: "Big Data, Backend",
      year: 2004,
      developer: "Martin Odersky",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
  },
  {
    name: "Swift",
    options: {
      field: "macOS/iOS Apps",
      year: 2014,
      developer: "Apple Inc.",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },
  {
    name: "F#",
    options: {
      field: "Backend, Web Development",
      year: 2005,
      developer: "Microsoft",
    },
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Fsharp.png",
  },
  {
    name: "Groovy",
    options: {
      field: "Web Development, Scripting",
      year: 2003,
      developer: "James Strachan",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg",
  },
  {
    name: "Lua",
    options: {
      field: "Game Development, Embedded Systems",
      year: 1993,
      developer: "R. Ierusalimschy, W. Celes, et al.",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
  },
  {
    name: "Scheme",
    options: {
      field: "AI, Education",
      year: 1975,
      developer: "Gerald Jay Sussman, Guy L. Steele Jr.",
    },
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Lambda_lc.svg/230px-Lambda_lc.svg.png",
  },
  {
    name: "Rust",
    options: {
      field: "System Programming, Web Assembly, Backend",
      year: 2010,
      developer: "Graydon Hoare",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
  },
  {
    name: "Haskell",
    options: {
      field: "AI, Education, Backend",
      year: 1990,
      developer: "Simon Peyton Jones, Paul Hudak, Phil Wadler, et al.",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg",
  },
  {
    name: "OCaml",
    options: {
      field: "Backend, Compiler Design, Finance",
      year: 1996,
      developer: "Xavier Leroy, Damien Doligez, et al.",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg",
  },
  {
    name: "D",
    options: {
      field: "System Programming, Backend, Compiler Design",
      year: 2001,
      developer: "Walter Bright",
    },
    src: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/d.svg",
  },
  {
    name: "Julia",
    options: {
      field: "Numerical / Scientific Computing, AI",
      year: 2012,
      developer: "Jeff Bezanson, Stefan Karpinski, et al.",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg",
  },
  {
    name: "Smalltalk",
    options: {
      field: "Education, OOP",
      year: 1972,
      developer: "Alan Kay, Dan Ingalls, Adele Goldberg, et al.",
    },
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Smalltalk_Balloon.svg/1200px-Smalltalk_Balloon.svg.png",
  },
  {
    name: "Ada",
    options: {
      field: "Embedded Systems, Avionics, Defense",
      year: 1980,
      developer: "U.S. Department of Defense",
    },
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Ada_Mascot_with_slogan.svg",
  },
  {
    name: "Prolog",
    options: {
      field: "AI, NLP, Expert Systems",
      year: 1972,
      developer: "Alain Colmerauer, Philippe Roussel",
    },
    src: "https://dashboard.snapcraft.io/site_media/appmedia/2020/04/Prolog-logo-512.png",
  },
  {
    name: "Elixir",
    options: {
      field: "Web Development, Backend, Distributed Systems",
      year: 2011,
      developer: "José Valim",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
  },
  {
    name: "Dart",
    options: {
      field: "Web Development, Mobile Development, Backend",
      year: 2011,
      developer: "Google",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    name: "Crystal",
    options: {
      field: "Web Development, Backend, System Programming",
      year: 2014,
      developer: "Manas Tech",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/crystal/crystal-original.svg",
  },
  {
    name: "COBOL",
    options: {
      field: "Business, Finance, Legacy Systems",
      year: 1959,
      developer: "CODASYL, Howard Bromberg",
    },
    src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/126731387/original/762b44b6b7ecbb0ed8ea500c7713076f8cb0ef9b/create-and-enhance-programs-written-in-cobol-language.jpg",
  },
  {
    name: "Lisp",
    options: {
      field: "AI, Education, Research",
      year: 1958,
      developer: "John McCarthy",
    },
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Lisp_logo.svg/2048px-Lisp_logo.svg.png",
  },
  {
    name: "Fortran",
    options: {
      field: "Numerical Computing, High Performance Computing",
      year: 1957,
      developer: "IBM",
    },
    src: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fortran.svg",
  },
  {
    name: "Delphi",
    options: {
      field: "Desktop / Enterprise Apps",
      year: 1995,
      developer: "Borland",
    },
    src: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/delphi.svg",
  },
  {
    name: "Assembly",
    options: {
      field: "System Programming, Embedded Systems",
      year: 1949,
      developer: "Various",
    },
    src: "https://plugins.jetbrains.com/files/9759/86800/icon/META-INF_pluginIcon.png",
  },
  {
    name: "Machine Language",
    options: {
      field: "Low-Level Programming",
      year: "N/A",
      developer: "N/A",
    },
    src: "https://cdn2.iconfinder.com/data/icons/software-development-line-vol-2/74/Untitled-2-54-512.png",
  },
  {
    name: "HTML",
    options: {
      field: "Web Development, Frontend, Markup",
      year: 1993,
      developer: "Tim Berners-Lee",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    options: {
      field: "Web Development, Frontend, Style Sheet",
      year: 1996,
      developer: "Håkon Wium Lie, Bert Bos",
    },
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

export default programmingLanguages;
