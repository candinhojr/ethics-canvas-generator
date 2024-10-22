
export default {
  header: {
    value: '',
    placeholder: 'Seu Canvas Ético',
  },
  localStorageKey: 'ethicsCanvas',
  props: [
    {
      key: 'date',
      placeholder: 'Date',
      value: new Date().toLocaleDateString(),
    },
    {
      key: 'name',
      placeholder: 'Seu nome',
      value: '',
    },
  ],
  sections: [
    {
      key: 'purpose',
      border: {
        bottom: true,
        right: true,
        left: true,
      },
      content: '',
      header: 'Propósito',
      isHeader: true,
      // placeholder: '• Como a empresa ou organização pode estabelecer políticas, processos e mecanismos de controle para garantir a conformidade com as normas éticas e legais? É importante garantir a governança e a responsabilidade corporativa para promover a sustentabilidade e a confiança pública.\n• Qual é o problema que você pretende resolver?\n• Como você pode garantir que sua tecnologia seja desenvolvida e mantida de maneira ética e responsável?',
      placeholder: '• Comece definindo claramente qual é o propósito da tecnologia ou produto que você está desenvolvendo.\n• Qual é o problema que você pretende resolver?\n• Como sua solução irá ajudar as pessoas?',
    },
    {
      key: 'governance-accountability',
      border: {
        right: true,
        left: true,
      },
      content: '',
      header: 'Governança e Responsabilidade',
      // placeholder: '• Qual é o propósito ético do produto ou serviço de tecnologia que está sendo desenvolvido?\n• Qual é o problema que você pretende resolver?\n• Como ele deve contribuir para a sociedade de maneira positiva e responsável?',
      placeholder: '• Pense em como garantir que sua solução seja governada de forma responsável.\n• Como você pode garantir que sua tecnologia seja desenvolvida e mantida de maneira ética e responsável?',
    },
    {
      key: 'privacy-security',
      border: {
        right: true,
        left: true,
      },
      content: '',
      header: 'Privacidade e Segurança',
      // placeholder: '• Como os dados serão coletados, armazenados, processados e compartilhados?\n• É importante garantir a privacidade dos usuários e proteger suas informações pessoais de forma segura.\n• Considere as possíveis ameaças à segurança de dados e informações pessoais dos usuários e como você pode garantir que eles estejam seguros.',
      placeholder: '• Pense em como garantir que sua solução proteja a privacidade e a segurança dos usuários. Considere as possíveis ameaças à segurança de dados e informações pessoais dos usuários e como você pode garantir que eles estejam seguros.\n• Como você pode garantir que as informações sejam claras e precisas?\n• Como os usuários podem ter controle sobre seus dados?',
    },
    {
      key: 'social-impact',
      border: {
        top: true,
      },
      content: '',
      header: 'Impacto Social',
      // placeholder: '• Como o produto ou serviço de tecnologia pode afetar as pessoas, as comunidades e o meio ambiente?\n• Considere como sua tecnologia pode afetar a sociedade em geral e como você pode garantir que essa influência seja positiva.',
      placeholder: '• Pense no impacto social que sua solução pode ter.\n• Considere como sua tecnologia pode afetar a sociedade em geral e como você pode garantir que essa influência seja positiva.',
    },
    {
      key: 'transparency-accountability',
      border: { },
      content: '',
      header: 'Transparência e Responsabilidade',
      // placeholder: '• Como a empresa ou organização responsável pelo produto ou serviço de tecnologia pode ser transparente em relação às suas práticas e decisões éticas?\n• Como sua solução pode ser transparente e responsável em relação aos usuários.\n• Como você pode garantir que as informações sejam claras e precisas?\n• Como você pode permitir que os usuários tenham controle sobre seus dados?',
      placeholder: '• Pense em como sua solução pode ser transparente e responsável em relação aos usuários.\n• Como você pode garantir que sua solução seja desenvolvida e mantida de maneira ética e responsável?',
    },
    {
      key: 'accessibility-inclusion',
      border: {
        top: true,
        left: true,
      },
      content: '',
      header: 'Acessibilidade e Inclusão',
      // placeholder: '• Como o produto ou serviço de tecnologia pode ser acessível a todos os usuários, independentemente de suas habilidades, necessidades ou circunstâncias?\n• É importante garantir a inclusão e a equidade para promover a diversidade e a igualdade de oportunidades.',
      placeholder: '• Pense em como sua tecnologia pode ser acessível e inclusiva para todas as pessoas.\n• Considere as diferentes necessidades e habilidades que seu público pode ter e como você pode garantir que sua solução seja acessível a todos.',
    },
    {
      key: 'education-engagement',
      border: { 
        left: true,
      },
      content: '',
      header: 'Educação e Engajamento',
      // placeholder: '• Como a empresa ou organização pode educar e engajar os usuários, a sociedade e os outros stakeholders sobre as questões éticas relacionadas ao produto ou serviço de tecnologia?\n• Como você pode comunicar seus valores e propósito de forma clara e acessível para o público?',
      placeholder: '• Considere como você pode educar e engajar as pessoas sobre o produto ou tecnologia que está desenvolvendo.\n• Como você pode comunicar seus valores e propósito de forma clara e acessível para o público?',
    },
    {
      key: 'comments-observations',
      border: {
        top: true,
        right: true,
        left: true,
      },
      content: '',
      header: 'Observações e Comentários',
      placeholder: '',
    },
  ],
}
