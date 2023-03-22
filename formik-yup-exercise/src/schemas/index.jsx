import * as yup from "yup";

const passwordRules = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

// ? lookahead ve lookbehind'ler(asagidakiler word boundary'ler icin de gecerlidir):
// + 1.) Eslesme tuketmiyor -> s(?=treet) ile treet'i degil yalnizca s yi secer, street iceren patterni komple secmesi icin regex .*s(?=treet).{5,} seklinde olmali
// + 2.) Eslesme tuketmedigi icin istenen yerde konumlanabiliyor -> (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,} digit, kucuk harf ve buyuk harf patternin herhangi bir yerinde olabilir.
// + 3.) Istenen yerde konumlanarak patternin tamaminda istenen kontrolu pattern siralamasindan bagimsiz gerceklestirebiliyor -> (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,} digit, kucuk harf ve buyuk harf patternin herhangi bir yerinde olabilir ama olmak zorundadir.
// + 4.) Sonuna eklenecek .{x,} obegi ile eslesme olarak dondurulebiliyor(x minimum positive lookahead capturing group sayisi kadar olmali) -> (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,} esleme olarak donmesi icin sonuna .{minimumOlarakPositiveLookAheadCapturingGroupSayisi,} eklenmelidir.

// - .{minimumOlarakPositiveLookAheadCapturingGroupSayisi,} yapisi belirli sayida karakter limiti getirmek icin mantikli bir alt limit belirler.

// - Eger boyle bir limit getirilmek istenmiyorsa .*s(?=treet).+ , .*s(?=treet).* veya (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+ . (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).* olarak da belirlenebilir, boylece street iceren veya bir kucuk harf, bir buyuk harf ve bir rakam iceren her pattern'in tamamini secer.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5) // minimum karakter sayisi
    .matches(
      passwordRules,
      "Must contain at least 1 lowercase, 1 uppercase, 1 digit, and 5 characters in total."
    ) //  regex ile kural belirleme ve karsilanmazsa hata mesaji gosterme
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match.")
    .required("Required"), // her iki password alaninin eslesme kontrolu ve eslesmiyorsa hata mesaji gosterme
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
