import { ksaCulturalVocab } from './ksa-cultural-vocab.jsx'
import { chinaCulturalVocab } from './china-cultural-vocab.jsx'
import { koreaCulturalVocab } from './korea-cultural-vocab.jsx'
import { indiaCulturalVocab } from './india-cultural-vocab.jsx'

export { ksaCulturalVocab, chinaCulturalVocab, koreaCulturalVocab, indiaCulturalVocab }

export const allCulturalVocab = [
  ksaCulturalVocab,
  chinaCulturalVocab,
  koreaCulturalVocab,
  indiaCulturalVocab,
]

export const CULTURAL_VOCAB_BY_SLUG = {
  'saudi-arabia': ksaCulturalVocab,
  china:          chinaCulturalVocab,
  'south-korea':  koreaCulturalVocab,
  india:          indiaCulturalVocab,
}
