import appstore from 'assets/selo-app-store.png'
import playstore from 'assets/selo-google-play.png'
import linkedin from 'assets/linkedin-with-circle.png'
import instagram from 'assets/instagram-with-circle.png'
import facebook from 'assets/facebook-with-circle.png'
import youtube from 'assets/youtube-with-circle.png'

import loja from 'assets/storefront_black_24dp.png'
import phone from 'assets/smartphone_black_24dp.png'
import graphic from 'assets/Grupo 3545.png'
import printer from 'assets/print_black_24dp.png'

import app from 'assets/Grupo de máscara 2417@2x.png'
import management from 'assets/Grupo de máscara 2418@2x.png'
import couriers from 'assets/Grupo de máscara 2420@2x.png'
import payments from 'assets/mobile@2x.png'

import appMobile from 'assets/Grupo de máscara 2417.png'
import managementMobile from 'assets/Grupo de máscara 2418.png'
import couriersMobile from 'assets/Grupo de máscara 2420.png'
import paymentsMobile from 'assets/mobile.png'

import { Input, InputPhone, InputSelect } from 'components/Input'


const data = {
    Header: {
        Button: 'Já sou parceiro'
    },
    Banner: {
        Title: 'Pigz: tudo que você precisa pra vender ainda mais!',
        Subtitle: 'Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.',
        Form: [
            {
                Title: 'Quero vender no Pigz',
                Subtitle: 'Dê o primeiro passo para aumentar suas vendas',
                Label: [
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'text',
                            Name: 'Nome',
                            Placeholder: 'Leonercio Goesfeeld'
                        },
                    },
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'e-mail',
                            Name: 'E-mail',
                            Placeholder: 'leonercio.goesfeeld@email.com'
                        },
                    },
                    {
                        Split: false,
                        Input: {
                            Component: InputPhone,
                            Type: 'tel',
                            Name: 'Telefone',
                            Placeholder: '(95) 99876-5432'
                        },
                    }
                ],
                Text: 'Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.',
                Button: 'Continuar'
            },
            {
                Title: 'Onde fica a sua loja?',
                Label: [
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'number',
                            Name: 'CEP',
                            Placeholder: '00000-00'
                        },
                    },
                    {
                        Split: true,
                        Input: [
                            {   
                                Component: InputSelect,
                                Type: 'select',
                                Name: 'Estado',
                                Placeholder: 'UF'
                            },
                            {   
                                Component: InputSelect,
                                Type: 'select',
                                Name: 'Cidade',
                                Placeholder: 'Selecione'
                            },
                        ]
                    },
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'text',
                            Name: 'Endereço',
                            Placeholder: 'Avenida Brasil'
                        },
                    },
                    {
                        Split: true,
                        Input: [
                            {
                                Component: Input,
                                Type: 'number',
                                Name: 'Número',
                                Placeholder: '123'
                            },
                            {
                                Component: Input,
                                Type: 'text',
                                Name: 'Complemento',
                                Placeholder: 'Sala 1'
                            },
                        ]
                    }
                ],
                Button: 'Próximo'
            },
            {
                Title: 'Me conta um pouco sobre a sua loja',
                Label: [
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'text',
                            Name: 'Nome da loja',
                            Placeholder: 'Restaurante Todo Mundo Gosta'
                        },
                    },
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'number',
                            Name: 'CNPJ da loja',
                            Placeholder: '12.345.678/0001-99'
                        },
                    },
                    {
                        Split: false,
                        Input: {
                            Component: InputSelect,
                            Type: 'select',
                            Name: 'Tipo de loja',
                            Placeholder: 'Selecione'
                        },
                    }
                ],
                Button: 'Concluir'
            },
        ]
    },
    Facilities: {
        Title: 'Você tem um novo Pigzdido!',
        GridBoxs: [
            {
                Title: 'Marketplace',
                Paragraph: 'Pra sua loja vender mais',
                Icon: loja
            },
            {
                Title: 'É fácil e rápido',
                Paragraph: 'Fazer um pedido no Pigz',
                Icon: phone
            },
            {
                Title: 'Pigz Gestão',
                Paragraph: 'Você no controle, sempre',
                Icon: graphic
            },
            {
                Title: 'Vias de impressão',
                Paragraph: 'Personalizáveis',
                Icon: printer
            },
        ]
    },
    Market: {
        Title: 'Tudo que você precisa por apenas R$199/mês',
        Subtitle: 'Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.',
        GridBoxs: [
            {
                Title: 'Pigz Marketplace',
                Paragraph: 'Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.',
                Image: app,
                ImageMobile: appMobile
            },
            {
                Title: 'Pigz Gestão',
                Paragraph: 'Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.',
                Image: management,
                ImageMobile: managementMobile
            },
            {
                Title: 'Gestão de entregadores',
                Paragraph: 'A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.',
                Image: couriers,
                ImageMobile: couriersMobile
            },
            {
                Title: 'Pagamento on-line',
                Paragraph: 'Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.',
                Image: payments,
                ImageMobile: paymentsMobile
            },
        ]
    },
    Products: {
        Title: 'E mais: suporte que realmente funciona!',
        Subtitle: 'Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.',
        GridBoxs: [
            {
                Title: 'Pigz',
                Subtitle: 'Tudo o que você precisa',
                List: ['Pigz Marketplace', 'Página exclusiva', 'Pigz Gestão Desktop e Mobile', 'Gestão de entregadores', 'Vias de impressão personalizáveis'],
                Info: 'R$199/mês',
                Button: 'Vender no Pigz agora'
            },
            {
                Title: 'Pagamento On-line',
                Subtitle: 'Segurança e agilidade',
                List: ['Aceite Pix e Cartão de Crédito', 'Antecipação Pix automática', 'Não dependa de maquininha de cartão', 'Segurança para receber pedidos', 'Agilidade para entregar'],
                Info: '2,99% por transação',
                Button: 'Saiba mais'
            }
        ]
    },
    Contact: {
        Text: 'Fale com a Pigz',
        Prefix: '95',
        Number: '3224-2603'
    },
    Footer: {
        Text: 'Tudo que você precisa.',
        Download: {
            Title: 'Baixe o APP',
            Icons: [appstore, playstore]
        },
        About: {
            Title: 'Pigz',
            List: ['Sobre o Pigz', 'Portal do Parceiro', 'Quero ser um Pigz Partner']
        },
        ContactUs: {
            Title: 'Fale Conosco',
            List: ['falecom@pigz.com.br', '(95) 3224-2603']
        },
        Networks: {
            Title: 'Pigz nas redes',
            List: [linkedin, instagram, facebook, youtube]
        },
        Copyright: {
            List: ['Nossos termos', 'Privacidade', 'Ajuda'],
            Text: '© Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85'
        }
    }

}

export default data;