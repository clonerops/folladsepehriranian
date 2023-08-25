import NumberToPersianWord from "number_to_persian_word";

export const convertToPersianWord = (totalAmount) => {
   return NumberToPersianWord.convert(
        Math.floor(totalAmount / 10)
    )
}