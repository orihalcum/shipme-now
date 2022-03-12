
// Form Validate Message
const typeTemplate = "${label} bukan valid ${type}";

export const VALIDATE_MESSAGES = {
  // default: "Validation error on field '${name}'",
  // enum: "'${name}' must be one of [${enum}]",
  // whitespace: "'${name}' cannot be empty",
  required: 'Mohon isi ${label}',
  date: {
    format: "${label} bukan valid tanggal",
    parse: "${label} tidak dapat diolah menjadi tanggal",
    invalid: "${label} tanggal invalid",
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  number: {
    len: "${label} harus ${len} digit",
    min: "${label} tidak boleh kurang dari ${min}",
    max: "${label} tidak boleh lebih dari ${max}",
    range: "${label} harus antara ${min} dan ${max}",
  },
  string: {
    len: "${label} harus ${len} digit",
    min: "${label} tidak boleh kurang dari ${min}",
    max: "${label} tidak boleh lebih dari ${max}",
    range: "${label} harus antara ${min} dan ${max}",
  },
  array: {
    len: "${label} harus ${len} digit",
    min: "${label} tidak boleh kurang dari ${min}",
    max: "${label} tidak boleh lebih dari ${max}",
    range: "${label} harus antara ${min} dan ${max}",
  },
  pattern: {
    mismatch: "${label} tidak sesuai dengan pola ${pattern}",
  },
}