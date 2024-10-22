
export const markdown = `# Your Business
date: 2024-10-22
version: 0.3
by: My beloved ones
for:

## Propósito {purpose}
[Sem um propósito claro, como saberemos se um modelo é bom ou não?]
### Este é um texto inicial!
Com várias linhas!!!

## Governança e Responsabilidade {governance-accountability}
[To build an effective business model, a company must identify which customers it tries to serve.]

## Privacidade e Segurança {privacy-security}
[The collection of products and services a business offers to meet the needs of its customers.]

`

export const model = {
  header: {
    value: 'Your Business',
    placeholder: 'Header',
  },
  props: [
    {
      key: 'date',
      value: '2024-10-22',
      placeholder: 'Date',
    },
    {
      key: 'version',
      value: '0.3',
    },
    {
      key: 'by',
      value: 'My beloved ones',
    },
    {
      key: 'for',
      value: '',
    },
  ],
  sections: [
    {
      key: 'purpose',
      content: '### Este é um texto inicial!\nCom várias linhas!!!',
      header: 'Propósito',
      placeholder: 'Sem um propósito claro, como saberemos se um modelo é bom ou não?',
      something: 'should be preserved',
    },
    {
      key: 'governance-accountability',
      content: '',
      header: 'Governança e Responsabilidade',
      placeholder: 'To build an effective business model, a company must identify which customers it tries to serve.',
      something: 'should also be preserved',
    },
    {
      key: 'privacy-security',
      content: '',
      header: 'Privacidade e Segurança',
      placeholder: 'The collection of products and services a business offers to meet the needs of its customers.',
      something: 'should be preserved',
    },
  ],
}
