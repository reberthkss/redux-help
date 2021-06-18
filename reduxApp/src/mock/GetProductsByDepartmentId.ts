export default function getProductsByDepartmentId(departmentId: string) {
    const data = {
        "2": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "2",
                                "id": "8006",
                                "name": "Cola Super Gel Three Bond 3g",
                                "price": 2.69,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/8006.jpg"
                            },
                            {
                                "categoryId": "2",
                                "id": "27811",
                                "name": "Fita Fixa Forte Transparente 12mmX2m 3M",
                                "price": 17.69,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/959366-1.jpg"
                            },
                            {
                                "categoryId": "2",
                                "id": "5028",
                                "name": "Caixa Térmica Floripa Vermelho Unitermi 30L",
                                "price": 67.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5028.jpg"
                            },
                            {
                                "categoryId": "2",
                                "id": "27813",
                                "name": "Cola Scoth Bond 3M 3g",
                                "price": 6.19,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/959368-1.jpg"
                            },
                            {
                                "categoryId": "2",
                                "id": "5219",
                                "name": "Chaira 8\" 22969-188 Tramontina",
                                "price": 37.49,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5219.jpg"
                            },
                            {
                                "categoryId": "2",
                                "id": "37779",
                                "name": "Garrafa Térmica Lumina Pump Termolar 1,8l",
                                "price": 104.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/plu-961399-1.jpg"
                            },
                            {
                                "categoryId": "2",
                                "id": "5250",
                                "name": "Pote com Tampa Rosqueável 2834 Plasútil 4,5L",
                                "price": 17.89,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5250.jpg"
                            },
                            {
                                "categoryId": "2",
                                "id": "5221",
                                "name": "Faca para Carnes 6\" 24472-186 Tramontina",
                                "price": 28.09,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5221.jpg"
                            },
                            {
                                "categoryId": "2",
                                "id": "5407",
                                "name": "Prato para Sobremesa Menu 5343 Nadir 19cm",
                                "price": 7.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5407.jpg"
                            },
                            {
                                "categoryId": "2",
                                "id": "21697",
                                "name": "Lâmpada Elétrica Especial Ourolux Bco 15W 127v",
                                "price": 11.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7898324239045.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BRWhNakg2SW5ic0x3UWo2U01jcWxYbEFBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF6M3dlSTNYUGd3eHZjbGpLZ0NBUkNBZ2dKSk9iWXhoYTlQdFZxcXNKcDdnWWF0WkEwWWlpZ2hRV0hRaEJvdnRPSnJla1lwZHI1eHQ2dk5KdHJockVXajdadHhHT3ZqRmhDTkJ2NHlIQXNVejJWRmtvQUtVUUdRUCtkMDZka3pUdjFqT1NTdE5PaWp2UWVCUzFZbkFySWUvdjZTRGw4N05hU3ZqdU1DZzZsWXVkTXRWdE0rTEhJeHN2bVh6OHk3N0JZWURud0drNS83OVA4ejZlUE9mNlFGV3AyZldVZ2JsYitOM0krWTdFVU5tVGk1K1BGUW1KcnVScGZmdnUyczVSbUlJWjg4UXc0dmdJbXNiUExsbDZMTndDRkJGTk02cGl4eWttVGQrR0hncDFnV2pET3p2VlE3ektsQVV1eDV4VDhNS1FMcGhJOWhxQXlWQVg2TkpOVmhpeEJqUm4vUGlwSWpkMUorVytaMmxNV2RJcVV6Vm03ZHJzeTkycGZOTEZUY1QzMW1KcTBSTnUrdXhQbFpOSSszSmFndmpmUjZRVUFmcDcxcWpwVkp4b01NTGZQbnRUb2xINnBNTDJIbG03dDhIcmFGWnh6aDM3UERUeFlCZWRqZG9zcVZRaHUyU0hiWGRYSThEM1daQTE5c0FUdm1lK1RiVlNVQW5jVEtwOFFUNVh5WUp6WkFSakxDVDQ2anorZVBKZldvdlR3T0FIc2NvZk85bFVzTWtsMUQzNWRidDlxeGVMWDY4eTV5SUxOSFl3MTVmOC92bm1SNWtOTEdPSThiVW1xbGRtaEFqNmd1MkgyM2tIVWt0ZmEvVEU2V0ZJdCtMSjBrWk5jbXQxMUNRQWJQa3lUR0JNOGZFNDhkK2pQYVZ3N3VHcXVCY3dFKzB2SFdOeTVOelRQbXBaRllxSkxtRGErMWhKY1ZpSFFHR3dVcG1FUFlpYmQ5YW5hSjFmenhhZk8rbU1VR1RGS0V2TkFMeVRidTIzTE90bnRXcVVCc2RHSEc3YWIzWDZUa2ZnWDdHblNISnZSek9FVHcwV1hjcUNBWWRqWk94NE1NN1N0UiJ9"
                    }
                }
            }
        },
        "13": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "13",
                                "id": "28770",
                                "name": "Pão de Hot Dog Elite Pan 280g",
                                "price": 6.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/963685.jpg"
                            },
                            {
                                "categoryId": "13",
                                "id": "2416",
                                "name": "Pão para Hambúrguer Delamarie 300g",
                                "price": 3.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/2416.jpg"
                            },
                            {
                                "categoryId": "13",
                                "id": "2370",
                                "name": "Pão Panco Caseiro de Coco 350g",
                                "price": 8.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/92592.jpg"
                            },
                            {
                                "categoryId": "13",
                                "id": "1088",
                                "name": "Bisnaguinha Bisnaguito Pullman 300g",
                                "price": 5.19,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7896002360234_1.jpg"
                            },
                            {
                                "categoryId": "13",
                                "id": "8319",
                                "name": "Bolo de Laranja com Chia Sem Glúten Jasmine 300g",
                                "price": 17.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/8319.jpg"
                            },
                            {
                                "categoryId": "13",
                                "id": "24143",
                                "name": "Bolo Mesclado Santa Edwiges 200g",
                                "price": 3.09,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/993211.jpg"
                            },
                            {
                                "categoryId": "13",
                                "id": "3202",
                                "name": "Pão de Alho Tradicional Zinho 300g",
                                "price": 9.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/3202.jpg"
                            },
                            {
                                "categoryId": "13",
                                "id": "5068",
                                "name": "Pão de Forma Castanha do Pará e Quinoa Kim 400g",
                                "price": 9.19,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5068.jpg"
                            },
                            {
                                "categoryId": "13",
                                "id": "41524",
                                "name": "Pão Integral Semente de Abóbora, Linhaça Dourada & Cenoura Nutrella 350g",
                                "price": 7.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/976211.jpg"
                            },
                            {
                                "categoryId": "13",
                                "id": "2378",
                                "name": "Pão Wickbold Iogurte com Cenoura Leve 370g",
                                "price": 7.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/2378.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BSHNRYjNCdGFFZm9sVkhmOUtpVEk1R0FBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF3Ykc0SWo0Y2F4NEpoeXlXRUNBUkNBZ2dKSmxBeXR5ZjdQenQ4aEpTek1tWkVUbHB6RmZWY1l2M0EvekwzN2gvUmdLWDk1VHllR2hCai95U2xjVDJZZzBRRG9XS2lWMVcxRGpsMzg3aERMMklsYWFMWWM5RUJucjZKZ2lsS0FIQUNsLzU2UTFLeS92ZE02U29idldHbG1oVm9RRm1IVStQWmxJVWh0aGRmcGhjbGRrV1B3SjM1eVNSTzJaTWxmR1JyNHRFWW9RdGhOOTkvRjc4OW9LK1N1clIrWWpiODRUTU1sakEvVDd6dXZJK2hiRXhPeGt3bWd1dSsvaTV1THRiZzQ2aG9ucjl5YWhoSjdvUm9DQ29ZTC9tRzRTVFBqbnNkVmxNVVVtc1E5dDVVQWRQUEtTbVJYSVFyUk43M0FDQWgwK1lhejhVd0ZUblFlQmJES2w4ZDlmMFNXaGxPQzliWE11T1cyV0YyU0RpOTkyQzZ4OWlGWVd5NUtudmc2UW9yeUdrYUxML2t4OU8zdzczTUR0c1BGcHpvakg0UG81aUlqWXhSVjZ0YlJCWlNBaDM0UWtYSGRVUzEwVzBzcWZVK0JTMG1Tbm1MTk9tV1BuOWdXSjVuZTF5SUJyaWNFdkpXNjg5ekR6NEx5WEFuR3FiUVFoUXlxYzErR0hUby9BLzNqK3k1UW5ySVgzRzNwL3BDcGZQb1lGZ0lTVXBQanVIV1dpdGpNVlA5TTFaSVBBTEFiNDhXRHdaOENkcjYxcUp6c0FqWmp3Mk5FdVBrdHNuZHg4VHloMEd0eWprY3Z5dkdQR0cyT1RUMm5SUjhGaHczNFhydDNSaFFoRHBrZytDRU9VT0VPeWNaRVRlZko4MW5SY0M4M0c5cUJLSk5qU0Ftakh4TDF2bW1LT1FJN3BTQUNJWGxYbGxGV1ErckkwOExiWjN3eVBSbUtqQlpoRzRXMS9EOGpEenNtZWNWeEU3ZlUvR1h1TWdCRkdoYTMvb1Z2UDltQVRTNzJyN1R6Z2ZtbVN2dkVIS0tHVzFMN3AzYWlYQ01GRDBMcGlzbmUvbXVsbTNybiJ9"
                    }
                }
            }
        },
        "8": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "8",
                                "id": "3238",
                                "name": "Queijo Mussarela Lanche Tirolez 380g",
                                "price": 17.438200000000002,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5255_mini.jpg"
                            },
                            {
                                "categoryId": "8",
                                "id": "4697",
                                "name": "Massa de Lasanha Massa Leve 1kg",
                                "price": 11.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/4697.jpg"
                            },
                            {
                                "categoryId": "8",
                                "id": "8840",
                                "name": "Bebida Láctea sabor Chocolate YoPRO Danone 250ml",
                                "price": 6.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/8840.jpg"
                            },
                            {
                                "categoryId": "8",
                                "id": "30111",
                                "name": "Requeijão Tradicional Catupiry 250g",
                                "price": 11.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/995961-1.jpg"
                            },
                            {
                                "categoryId": "8",
                                "id": "39446",
                                "name": "Iogurte Jabuticaba Batavo 170g",
                                "price": 1.69,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/987197.jpg"
                            },
                            {
                                "categoryId": "8",
                                "id": "3738",
                                "name": "Massa Lasanha Fácil Mezzani 1kg",
                                "price": 10.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/3738.jpg"
                            },
                            {
                                "categoryId": "8",
                                "id": "29123",
                                "name": "Mortadela Confiança 400g",
                                "price": 4.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/974790.jpg"
                            },
                            {
                                "categoryId": "8",
                                "id": "7642",
                                "name": "Manteiga com Sal Relíquia da Canastra 200g",
                                "price": 7.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7642.jpg"
                            },
                            {
                                "categoryId": "8",
                                "id": "7367",
                                "name": "Margarina com Sal Claybom 1kg",
                                "price": 6.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/975284_mini.png"
                            },
                            {
                                "categoryId": "8",
                                "id": "1795",
                                "name": "Leite Fermentado sabor Morango Activia 800g",
                                "price": 12.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/1795.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BRnk3dCtOeWhGM0pNeWhWWXpuKy9LT0FBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF6K29MdWdHc2VBMTAzTTFmTUNBUkNBZ2dKSmVIbytVQlVlUEJUNE15Wk92VFQ0aFFLWmR5dmdhbEFySFRFLzhvNjRST2I3V216SWR4cmY5ZFFUZGdXUVF3SGNXY0VVYkxwQWhOUFg0cTk1cEZHcHJRQ21DWnFRNU0yMHA1RVNmaVZyMk41UFgwclpDdU5ibDk3M3NWNjRpNU5FbVppeWxJaFk4MVNLNDhrWTFOOU4wRzFEK1NiRDNsMWJOazhPa1hQMnI2U05QODY1aGJEM1FMY0tPSy9uQ1JQeFVQUTV5elEvK2V6czVLU0FGYTFyUUQzaU5lQ0JPbG9vUjRiS1c0V2x0Nk9vTzhYeFFKMGw4cUdQUGJtaVdadGFxMU9yNmN6Q2NpcW54cW81MXRjMnhPamc0aW9EemRkbTZIOVlSQit4NTBMQkhaK0ZmTUZxYUoyR3l2dlRYdEVFaVFlZG1DSkp5MGYrZ1FpTEVsMFU4LzE3SEtCcnluQ0I5STNYSEQ1K3UrQlVmSllmS2VrVjdPMkNhRVdZNWtvTTBtdS9TWXJreHN3bnlyVGdDTTJqdjJoeEFGUVpGUGdaMGlJeE5lVkhHSFFYWERraU5kcjI3RDJZbGd5RXRRY0k1YnZBVXRibk0vWXBBVDJjc2x4SmxhcEgxNURYaHpNT0k4OHhSbU1YZ20vSzl2Sm5lUmY2ODNyeW10NmxMYXR5b3pzZHowTk5tWmV0V0lQakhUKzk1RWdRZzUrV2JjcGgrYWZZeEdSOGtCaE5mY3E0dDJPNDdTVi93UHdBbFZxb3NxVm1rSy82Z3NnWHcxZU03NXlZWk8vd1ZOeHVUWk9CSUgyMHprVVhCTlM4UEVUTWJUUUNyVitqVWJ3azJsbUZnMFo4YlczZktuVXJuWWtYRjJ6cDhLWkQ3NlhMRjFmMWw5WDExSTI3bmtTb0Rtb2NTKy9RMVQrem1Mb0FYTUFPNGwxQmZWc0FDN3pDajJpZ0dKcFpQMTNybFNpdWxLZnNEbGVxZTFRSGpQV2FPOUxnbjhlQ1RCNEF1NVJrSGRVR3lJZUlLeXUzNGsvcyJ9"
                    }
                }
            }
        },
        "9": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "9",
                                "id": "7150",
                                "name": "Shampoo Clássico Neutrox 300ml",
                                "price": 6.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/972604.jpg"
                            },
                            {
                                "categoryId": "9",
                                "id": "5021",
                                "name": "Creme Dental Oral-B Stages Frozen 100g",
                                "price": 9.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5021.jpg"
                            },
                            {
                                "categoryId": "9",
                                "id": "41049",
                                "name": "Sabonete Gardênia e Argan Flor de Ypê 85g",
                                "price": 1.09,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/998372.jpg"
                            },
                            {
                                "categoryId": "9",
                                "id": "7232",
                                "name": "Shampoo S.O.S Cachos Coco Salon Line 300ml",
                                "price": 15.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7232.jpg"
                            },
                            {
                                "categoryId": "9",
                                "id": "3903",
                                "name": "Shampoo Pantene Liso Extremo 400ml",
                                "price": 14.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/3903.jpg"
                            },
                            {
                                "categoryId": "9",
                                "id": "4541",
                                "name": "Condicionador Dove Ultra Cachos 400ml",
                                "price": 20.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/4541.jpg"
                            },
                            {
                                "categoryId": "9",
                                "id": "4817",
                                "name": "Desodorante Spray Amazonian Phebo 90ml",
                                "price": 7.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/4817.jpg"
                            },
                            {
                                "categoryId": "9",
                                "id": "38284",
                                "name": "Desodorante Dove Aerosol Invisible Dry 3X89g",
                                "price": 39.49,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/953376.jpg"
                            },
                            {
                                "categoryId": "9",
                                "id": "23448",
                                "name": "Desodorante Leite De Rosas 170ml",
                                "price": 5.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/84204.jpg"
                            },
                            {
                                "categoryId": "9",
                                "id": "4262",
                                "name": "Shampoo Tresemmé Blindagem Platinum 400ml",
                                "price": 12.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/4262.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BRWFZbUVid0hCQXQzczRaUm9kYjhIdkFBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF4dVYzd0RMZDBWMjlSc1hYd0NBUkNBZ2dKSm1WTitidGpxRHdhOGZWQmhSTnMyb0xYVmFidzlGVXVXOHUySGpqN0dkTzk1QmdwZDBSclZWZTU1WldySXVvWXZ1VmxyZmt3NUlNNjQ5am5MSjhUbEhuWEVrRzMwWWVER0tBNmoyd2RsVWo0RDZoREVoVmJEOW9SVWlBbW14NUtqQTNkbzMxQzRibFlzdng2SndNYWpENGF3THg1VU04YUk3RjU3SFlTM1lJUVdybFRmdHhIcjc1UVkzT0pQVzJsZk9IS2NrWENzV2MzSi9maU4xM1U1cWFnSm1uUzBmL2l1OWZTSEdlTlhzQkJxTGlWZFliKy9PRzE2QUFxek9rRnR4cnVUYTR4UGxWMDFTbXNpN051MDNXVDFhbWljRlEzSkx1MkFYOTRVdE5wekxuOHBSUWlHdHErWktJWjI1bkVYMGR2MUNMZzI5cDVlbjVjcXM2cWF6SXQ2R1lGN1lkcmV6K0pzQWpjNXkzbFFBbUlMa3p0U29RMG84Qm1qNUFMTVo2R2VFTStmUFUwK3FRZ1grMUd6b3cyemorWDdFaEwyS202MTNJVTlIeE1lU0E0N0tQTm14cmw1NHIyOXRzOUJ0amNyQ0ZwekhhNUx6TjB4RUtqNzNPK3Avckc2c1BRbjdIVm94ZEgxQlkzbk5OWkFVUVdNbzBZWXd3Qm9SaEpRK3UrMnVreFZIQXhDZmduaDBSMW00MTl6UStKeGF0UkNrL1ZSdDhYOXd4dVJETDBsSFFIb0dtTnlTTiszdjNoVTdQVENsV0ZybWNTRG1mRDZBWHBNSEVvMkJTVUJLalZ2Rm5nN3JORDA5V2FZRVp2SmpVTnBjSTFyTzhZbmpWUFp4WTR1OFFjaENTYkRNeGt3REsyMDM0aEg5LzhyOFZSaXBLQ3ZzanQ1NnVidy92SE9EaDhKYithc2pndjgrakJUQlZ0RXF2amd6djBmY1pRbndqSTkzay9JZ2g5a2VYTTBlZEFQSXpjcVg5Nk0vd004bkdZTkloVUN0ZEdjUTNmNGpzVFFScXJJa0EzayJ9"
                    }
                }
            }
        },
        "6": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "6",
                                "id": "2381",
                                "name": "Cação em Postas Costa Sul 800g",
                                "price": 17.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/140937.jpg"
                            },
                            {
                                "categoryId": "6",
                                "id": "30089",
                                "name": "Filezinho Sassami de Frango Sem Transgênicos Korin 600g",
                                "price": 20.6,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/998878.jpg"
                            },
                            {
                                "categoryId": "6",
                                "id": "1588",
                                "name": "Linguiça Toscana Aurora 800g",
                                "price": 17.5,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/1588.jpg"
                            },
                            {
                                "categoryId": "6",
                                "id": "1171",
                                "name": "Salsicha Hot Dog Sadia 500g",
                                "price": 11.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/1171.jpg"
                            },
                            {
                                "categoryId": "6",
                                "id": "3133",
                                "name": "Sobrecoxa de Frango Congelado Perdigão IQF 800g",
                                "price": 10.3,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/000000000000950975-un_mini.png"
                            },
                            {
                                "categoryId": "6",
                                "id": "1307",
                                "name": "Salsicha Perdigão Congelada 5kg",
                                "price": 60,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/256560_mini.png"
                            },
                            {
                                "categoryId": "6",
                                "id": "8476",
                                "name": "Fígado de Frango Congelado Perdigão 1kg",
                                "price": 5.5,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/8476.jpg"
                            },
                            {
                                "categoryId": "6",
                                "id": "4423",
                                "name": "Pescada Espalmada Costa Sul 800g",
                                "price": 18.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/999571.jpg"
                            },
                            {
                                "categoryId": "6",
                                "id": "5000",
                                "name": "Filezinho de Frango IQF Aurora 3kg",
                                "price": 45.5,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5000.jpg"
                            },
                            {
                                "categoryId": "6",
                                "id": "8868",
                                "name": "Linguiça Suína Mini Rezende 5kg",
                                "price": 79.6,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/8868.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BR1p6RDBwNnozOXMyNDBPRU9vblh4ZEFBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF3MlNyNWxVbG1HM0kwL2pLY0NBUkNBZ2dKSkN4YlpicWJOWHk0TlBkYi9DNWV5RWozZDIwTDJhb2hDTWdyNUhhSzh0RlFQTU1lVy9HeDF3Rlg1WkZQaTdKSWw5VTJaQlRqQ2tzVk44TSs5cU9xRmRHcGpOQW1sU0NTRFFJaXREeXVDRnFaT0x1YkNIeGgyZytxQW0rSDhIbEVJc0pPeEg2SDJldVNSWlc4QzloWTUzNHRSeGNuTkFxN09rYWx5Z3JueFk4R0c2T2JvSC95eFIzbnRjRXVMN3dFZmUrUmNBQ0RKMmhnc29Ta1hwVjZqc3dkcDVVTzJmcVZ1Z3NId0YwUlhic1I2UEpDM2FjSlNRYy9wK2ErZ2VBUkJUMHZ0Tm0wU0I1Zjk4M3JTcldYVy9TekRJMmdCalI1UWpUeEk2NnQzYjNYNzR2dnZtSnl5ZzVTbVFYMmdXZm93YlA2Z1VUVFF6ZGZlQktvV2wzbWwxbll5eTlmaVhpNzdDOW8wb3RXQlBWaTlWUXgxRzBvQzVEMWJKSjZOVy9TNktzenBLOW5nQ0hzQm1vb1JTVzlUS2pzQTVpRW5aOFlSMW5rWHFtWW1zNEJEaWtkYmFRNk0xZTR3WEs4ZjlYY0syNXE4WDV3aTc0MnZPNlVzTzhGbU9kcUVUeGlEN2ZVTlBveU0zdENYTnM5ak81R0R5MGR3RzlqZTFuN09EWmlPellxUnptZzZqOXAwaFZBS2dQL0x2S3grLzUvQ2ZycDFVR04xUnVxWVZIWWxnSm1xdTNONlN4b2w1QjY3cUpLNjE1NDNHbkFVWEt1Y3RpTFJhVWQ5bkJnLzZGSTRvT0VmdjhjVHB4QmVhRjI5Q3o2YWg3QXZSZWV0Qng2cVV0L3hiOFZkM0RJOGNOR1FhaHU3VmFGMHU1K0pjUXZZdlFiTVRxRkZ4Zy9zOXp5NGJHWGk5VW02TDJqVXlCT0o4ZkdMUXdQSUtQTjV0bm0zS2FlbzM3aDg3dHFyNnJjeHhoSHplUUVFNkUyZW9PdStzR2NjL0dDbGJtbkYwa1R1S3dMck1yc3FlMUMvSnd1QyJ9"
                    }
                }
            }
        },
        "5": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "5",
                                "id": "4829",
                                "name": "Chocolate Charge Nestlé 30x40g",
                                "price": 37.19,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/4829.jpg"
                            },
                            {
                                "categoryId": "5",
                                "id": "7082",
                                "name": "Drops Halls Mentol 21un x 28g",
                                "price": 18.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7082.jpg"
                            },
                            {
                                "categoryId": "5",
                                "id": "1915",
                                "name": "Cobertura De Chocolate Garoto Meio Amargo 2,1Kg",
                                "price": 65.69,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/983392.jpg"
                            },
                            {
                                "categoryId": "5",
                                "id": "6865",
                                "name": "Chocolate Extra Cremoso Hershey's 92g",
                                "price": 3.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/6865.jpg"
                            },
                            {
                                "categoryId": "5",
                                "id": "8520",
                                "name": "Bala de Gelatina Cream Kiss Haribo 100g",
                                "price": 4.69,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/8520.jpg"
                            },
                            {
                                "categoryId": "5",
                                "id": "8826",
                                "name": "Chocolate Negresco Garoto 90g",
                                "price": 4.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/984166.jpg"
                            },
                            {
                                "categoryId": "5",
                                "id": "5097",
                                "name": "Bala Mastigável Zaza Peccin 600g",
                                "price": 6.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5097.jpg"
                            },
                            {
                                "categoryId": "5",
                                "id": "2690",
                                "name": "Pastilha Tic Tac Menta T14",
                                "price": 24.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/2690.jpg"
                            },
                            {
                                "categoryId": "5",
                                "id": "7595",
                                "name": "Bala de Gelatina Tubes Morango Cítrico Fini 12x17g",
                                "price": 9.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7595.jpg"
                            },
                            {
                                "categoryId": "5",
                                "id": "6866",
                                "name": "Chocolate Meio Amargo Hershey's 92g",
                                "price": 3.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/6866.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BRVlBc1ptTEZXVERobmNnUWN2RXdaOEFBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF4Um5iUlV5b040ZTIraG1yb0NBUkNBZ2dKSjhVNEhKK2UwYUwwc3ZsaEJ5NmZrL3QyekFpMmJqemtDK2ZiU3o4S2dacnVxNVVuSHFnY0d4cUNuUWlQSGhDS0x2eEM0NzZmVmpQVmVkZVFTY0dncFRpQXVrelljK2FGUExUaDlSVFF2S01pRDcyc1U4ejdoaS9pRGxOSXdrVXNXR1VKOXMwVURRT2FnZlpxUE9VbnFDZ1gzbHNsdEtKeUNYWHJDaGJGclFVVU1RZVlvbG5PMVQ2QnUrYmw1V1lDRjNKMEdCcGpzRnUxT3B3UzFKS2gwMWtaWlgyanNETGdnWUNhbUlBcVBtdDYzbG1ZUk1vOWdDbEY3a0dpRThnY1FEaGkwM0Y4REYxSFdjNHlSSnY2Ymc4MncwM053NDFqQWlMckZRR2tPS3VIcklrTnVROUVPSkpKQTN6NnFSTFpHb0dWb3dpNW5Gb2lwSU1SMy9TMXIvS1k3UnkwSFRUeTJLMXBhWmZWTWV1ZHVIeTdJUWZWOWVuV1NDQWozK2VuOUtrYmVlUlpob3d1TVFCWTE5aGVjQU5CVXVPdHBTY0F5Wkc2NktGeEZrOUJzYmprV0x1RW5JVGFMMDYrVzF1ZGlQWS9XQTNpbXczVGc0UnY3ZVZXY0lCUXFUY3IyTG5QOUtwNG84QzZKdEhTY0kyNlVDTjZFZFlzelpTN2RtYnJHR212S1h2WkNUSGswZlFISWd4Ni91TVkyNlZCQ0Ivd3E5eHJub1pXNFJ6TGlPUitDaHpUbEFUV0kydkhuR1U0MFQ2UWNnMkloTEpDWVhZQm9WVTNWZXRlbHNVZnVoNjl0NnRWa3ovaXptMEpuemxQZ1piMjB4TSt4RmtsVTQreUlzY0RSWENQQ2R3ODZhTzZ3MHNObE1acU1VeXhjVTVFRkdCT0VrMUdhYXlNYnRTbFErVDhRdE9OVXRCbDdKZTk3c3Z0SUxqOThOLytoaXJwRnlYdjZIaEtpZXZsRWo1NlVkYUtkMTJ3QWNRWWRLRUJiRHcrOGZGcW5SQTRlZkNkbXlicVdNbHRKSWJ5UiJ9"
                    }
                }
            }
        },
        "4": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "4",
                                "id": "6308",
                                "name": "Aguardente Blueberry do Barril 500ml",
                                "price": 2.49,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/6308.jpg"
                            },
                            {
                                "categoryId": "4",
                                "id": "9000",
                                "name": "Néctar de Manga Izzy 1L",
                                "price": 2.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/manga-1l.jpg"
                            },
                            {
                                "categoryId": "4",
                                "id": "5241",
                                "name": "Vinho Branco Suave Jurupinga 975ml",
                                "price": 21.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5241.jpg"
                            },
                            {
                                "categoryId": "4",
                                "id": "5859",
                                "name": "Vinho Tinto Suave Bordô Dom Bosco 750ml",
                                "price": 14.19,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5859.jpg"
                            },
                            {
                                "categoryId": "4",
                                "id": "9740",
                                "name": "Vinho Branco Chileno Sauvignon Bicicleta Cono Sur 750ml",
                                "price": 56.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/9740.jpg"
                            },
                            {
                                "categoryId": "4",
                                "id": "9354",
                                "name": "Suco Integral de Uva Branca Panizzon 1,5L",
                                "price": 12.89,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/9354.jpg"
                            },
                            {
                                "categoryId": "4",
                                "id": "2954",
                                "name": "Refresco em Pó Sabor Manga Tang 25g",
                                "price": 0.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/2954.jpg"
                            },
                            {
                                "categoryId": "4",
                                "id": "6541",
                                "name": "Suco de Pêssego Special Blend Ambiente Natural One 900ml",
                                "price": 5.49,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/960517.jpg"
                            },
                            {
                                "categoryId": "4",
                                "id": "9177",
                                "name": "Espumante Prosecco Ice Garibaldi 750ml",
                                "price": 40.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/9177.jpg"
                            },
                            {
                                "categoryId": "4",
                                "id": "4859",
                                "name": "Refresco em Pó Sabor Limão Qualimax 1kg",
                                "price": 6.09,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/4859.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BR2U1ZzdyQlJJTWcySzVGR1I3cnlVeUFBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF3cnJpNi9BYVBjRC9xTDZzb0NBUkNBZ2dKSmFyMkFpelBTQ0puYnZXZ1luK0lHV1JYY3ZGK2trVEIzdzVZSGoxbTdvRGMwTFExZFhwVlU3VGNVQUVjQUdWRGxjRUhyRmNrZUlQQUJLeWc5SEQ2dXBtZzhZWWFSUGtHNEFkdFVvaUFRYWovM2xqb3QyTy9WZzdDZmNnWWRyVXhyZkFMbHlPb01pNW9jZGtWYmNXL2VOSjRya2hIcnpwWktjK3BhNlhQK0d0eWRxNFlxNHJqMlVqOU1ORlcwNXcwalZuM05ndTBmeU5BSk9DWi83UXgxSGkxSHptZ3FtNHdPenFHNlJDR1hqdWlBbThYZStOUm1IQkZ5d0FYMXIycEJsdWtxaCt6a0wzbWVIQjRxZ2VFT3VHQW9lcVBZRThEV0JzNTZJQVU5MmI2QTJxQWE1aTBLc1RCOWo3ZXVHSElNR0pBQTJZS3p1VllLc3pYUEwwUEdoeFI0S1hYMnMyNUZMR0ltQXRPWVF3NkQyVys2MDNuSlcvUk9UK2hlU2FtSFp3NWp1QnE4TzBnWlA0M0psME9aU2tyaTBaTENvNVpjR3FNY08vSUVXMGhRZFJrTlk1T0dldU9yZ0FDczJLVHl4QXBSWVRzMnlnMmhEai92bkZwT3BRcGVoeUhjWnNoc1d4TUZldFNYUmtTQkxqcEovZC8yKzJKWkpEMHZmYWtnR3oxem1ic3g1SlpjUDlEcHNNdHFDZE1vaW5pWmtxSmxFQ2ZId0dPOWM0RWVCeHhlaDRORFlSQUgvWEt4YW9zNmlYVDVsZTFzVjN5YUpFZ3Joa2NjQlJUQW5hVkxPK2ZuYUJwSGFvLy9COEVYSUNNcXJZbkRnTXFWZlFIc01QM0Z2Tll0aitqNDUveUVlNW9oZ0VwelVYK2tnOEJOOGZGY0kyYjU2STNSZk1DWWxBYlZjTEZzbWJGWVpXRlNiVldxQU81SHNyZUppa3ZaWlpSMVptcXFpYk5UbXdCNklVajFYRHptODNQSDYxYzRWU1JUQ0V0dmJRK2VXSGhwbk45TkUyM285eXhPbjVlOCJ9"
                    }
                }
            }
        },
        "7": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "7",
                                "id": "7458",
                                "name": "Sorvete Chocolate Garoto 1,5L",
                                "price": 17.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7458.jpg"
                            },
                            {
                                "categoryId": "7",
                                "id": "8865",
                                "name": "Sorvete de Coco Sabores da Fazenda Jundiá 1,5L",
                                "price": 16.69,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/8865.jpg"
                            },
                            {
                                "categoryId": "7",
                                "id": "29162",
                                "name": "Almondega Bovina Seara 500g",
                                "price": 16.69,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/975614.jpg"
                            },
                            {
                                "categoryId": "7",
                                "id": "5879",
                                "name": "Sorvete de Creme Cremosíssimo Kibon 3,2L",
                                "price": 39.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5879.jpg"
                            },
                            {
                                "categoryId": "7",
                                "id": "8097",
                                "name": "Mandioca em Tabletes Congelada Bendita Mandioca 1,2kg",
                                "price": 15.5,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/8097.jpg"
                            },
                            {
                                "categoryId": "7",
                                "id": "2259",
                                "name": "Faroeste Burguer Bovino /Ave Aurora 672g",
                                "price": 14.4,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/2259.jpg"
                            },
                            {
                                "categoryId": "7",
                                "id": "1351",
                                "name": "Lasanha Bolonhesa Sadia 1,6kgr",
                                "price": 31.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/331295_mini.png"
                            },
                            {
                                "categoryId": "7",
                                "id": "5637",
                                "name": "Mini Chicken Frango Sabor Queijo Perdigão 275g",
                                "price": 6.5,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/953821.jpg"
                            },
                            {
                                "categoryId": "7",
                                "id": "7673",
                                "name": "Sorvete Laka Lacta 1,5L",
                                "price": 21.69,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7673.jpg"
                            },
                            {
                                "categoryId": "7",
                                "id": "6266",
                                "name": "Lasanha à Bolonhesa Seara 1kg",
                                "price": 16.69,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/950213-1.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BSGtlRzh3TmRMVVJEemlhalZTUDlWM0FBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF3a1JHM2d0amdIcGdaREJ6VUNBUkNBZ2dKSlEvaG4zMmZwUCtQajJ6b0xhK2p3b1RrSHNWU3hJdHB3a3o3R1ZVTkNYeW1TL2JMNWlDKzN6Y2t0MzdWNmovaCs0eGlzT2ZwNnZtM1U3ZDM2ZXRvYXJ0UnlmeEtvOVJLTTVmSWpBd2gxSFZYSVNmRmZhcXAyZW1id1k2dnBzazRhQkVQMnRUS3J0UDFmNWlZVG5RdnlWRVpOaitIK1lYUldTTkxGRGovcnJiNk1yNFZ3Zzcvd01yTk5zcDEvZEpGaTdOYndFd2VKWmxBY1lKN0lnaHJRM241NkFCOERVNnNpYmFkdHNUR2xKY25yOWZHeDlQTEpiUkE0UHRBeVFyR2d1V0c4c3lWQm1JbnlLYk1kNWVIeSt0aHh1ZGdFRW40VmZVb0lZRlZld0VjSmU3TE9wUWJ6Zm1HMVVUNndRS3VyK2dGb1BFOXV2TDdLbExkQ0laQ3JlQkw4cjJDNXJxZm9kQ3NzZE1mRDc2V1VxMjFURDhlN0QxdWsvWGh6Tjd6VndteVRJYWtaWStiRUZuYUpkZ1F1dHREczMyRFMvK3ZheC9nLzR1YitqbTY2Y3A1REhmbUtUOUx3TUFhUm9WSVo4RXVCK3RTMmZCaSsyZDBpM3BvdWhxVVRZQUJmYnpLcWZxSDgvbDlaUkJIa0UwdHgxZVcrMmRZcW8rd0ZoZk4xRGdqVUlEVDJMS2Q0Zzl5RHR5ZnpsaGdsOEszbytlK2FTeDlWaXoyZzE0NzQ3MzRaZk92YTV4dHV5aUpkekgxajdmdmlVYmcrd2JzRTh1RkdORzRteWdQNHpKODR3OEtiZlpyRUJQdlZVL2xhcXVrS1FneFZyOHRYVldqTGFPVlB0REREZkJBS0E0Wk1VSnVPbzZkY1Njd2ZrNmNxeEdXcnY1bVBydVFwM2lKbkZlTXk5dHB2TkxveEo2TTdPQTBpeHI2ZG1Xcmkwb3gza0ZGOUFvMTR5U3R3VFh4d2ovK2UrNVVWY2dPZklseG1zUVRNbkt2aHVKTCtJNE9mSDN5T2lveGN3Mm11OTRnWSJ9"
                    }
                }
            }
        },
        "11": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "11",
                                "id": "5704",
                                "name": "Saco para Lixo Reforçado Embalixo 30L 10un.",
                                "price": 4.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5704.jpg"
                            },
                            {
                                "categoryId": "11",
                                "id": "7390",
                                "name": "Limpador de Pisos Madeira UAU 750ml",
                                "price": 7.19,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7390.jpg"
                            },
                            {
                                "categoryId": "11",
                                "id": "6500",
                                "name": "Amaciante Diluído Comfort PRO 10L",
                                "price": 41.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/959971-0.jpg"
                            },
                            {
                                "categoryId": "11",
                                "id": "3093",
                                "name": "Amaciante Concentrado Lírios do Campo Downy 1,5L",
                                "price": 29.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/950109-1.png"
                            },
                            {
                                "categoryId": "11",
                                "id": "3419",
                                "name": "Lustra Móveis Johnson Bravo Lavanda 200ml",
                                "price": 8.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/3419.jpg"
                            },
                            {
                                "categoryId": "11",
                                "id": "3958",
                                "name": "Limpador Diluível Ajax Fresh 1L",
                                "price": 10.89,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/3958.jpg"
                            },
                            {
                                "categoryId": "11",
                                "id": "8302",
                                "name": "Alvejante Sem Cloro Semorin 5L",
                                "price": 26.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/8302.jpg"
                            },
                            {
                                "categoryId": "11",
                                "id": "6563",
                                "name": "Lava Roupa Líquido Urca 3L",
                                "price": 18.49,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7896056405608.jpg"
                            },
                            {
                                "categoryId": "11",
                                "id": "7616",
                                "name": "Alvejante em Barra Super White Vanish 75g",
                                "price": 4.09,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7616.jpg"
                            },
                            {
                                "categoryId": "11",
                                "id": "41090",
                                "name": "Lava Roupa em Pó Power ACT 1,6Kg",
                                "price": 17.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/950057.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BSDBUMzFXc2xLNkRpT1ozdDg0eVFLeEFBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF4YVJKaU5KY0FoQWozM1Vtc0NBUkNBZ2dKSnVGMnRXQmtOT1F1WnlUYzVuZ3ZCNHJpNTBmVE5sMDQvN2pnMjJ5QmEyL3h1bzVRNUR6anRCdUxDVDdPbXJsNlM3TXd4QlFvQUlCazVybS9tcjJSbUo2bjkzamRJYTRhcmhYTlZka05telRMVmExeDlLQktkNTZLMHBnekZzdlE4VTkvN3N6Y244Z1ZwMWVVd1pHME81WjY3TmRvNE5xb0l6L0Y2V3pjTEJORldkZ0pEUDVhVktyZ0NVQWV2NkNxd0ZMUG45K0ZMSUFjOGFaZDI4bCtieEJDeENsTlRJdGkzTGpReGJvbnhCRHJNYXFyQVhSQkVVNlQ5dDBRMkUvdjRQQWxaMVFUby9XR1JDZk5QR0toNEFpSXU5UllwSHJXanlkY1c2NTZSUXdUanRRZ2F6WWkxQjkvdklxWXg3aW5jMGxMQlc5bFMwOE1tSmlCKzNoUUNPNnZjVE9jQVV4czNpcUV2RldmbTBkc3dzUXQzQUtIdmZmRktHb0puaXQ4RVIzY3p2SzBzaDBwTnppL2x0MGRJRDhYMVhIN0JzTVpmbGxrdlZ6OCtoTVh3SEZUdTJUZkppTnZuT1RyVzk1bkh4dkw4TzRuaDVVVHlhYy9PcGIxZE5ZaGplTGNZeU1NR1prWXk5VUQzd2MreWZhMHJYM0NuaDh1ai9QS09OZG9heUZlVWQ4MlpuU0w1YjZPM1ovb090d1BMcjdNazFrdnluZWVzd2FxYm5VaStmYVMrR2ZMa0hRUlk5NnVxcVhvNlMwYjhEYUhnRUl4TWwxaFE3UHJ5NCtJenFLV1E0azlZbmhNMGE0Nm1HMnVXUzdBbDgyTGlmQUt1a1NKQVd6VDFZYjFkQWc2b0RDUzEzMVNOclliZzZQUFBVMzFvb1dxblJYL3BHencxRzVCR3FaNnFScWxCZXoxanJtWTdPZDFWSHBPNyszNHNhS1F2cElFcm11Z004L0p1K0p4b2FJOGFGUy9Kam1DT1BhS2N2ek41OUE2bHVhQ2FQb3NKNzZGVWFEaW1keExNT1pCNSJ9"
                    }
                }
            }
        },
        "3": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "3",
                                "id": "6507",
                                "name": "Fralda Soft & Protect Mega XG Personal 42un",
                                "price": 36.89,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/6507.jpg"
                            },
                            {
                                "categoryId": "3",
                                "id": "8862",
                                "name": "Creme para Assaduras Puro Natural Huggies 80g",
                                "price": 29.49,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/984563.jpg"
                            },
                            {
                                "categoryId": "3",
                                "id": "7860",
                                "name": "Sabonete Líquido Infantil Da Cabeça aos Pés Johnson's Baby 750ml",
                                "price": 46.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7860.jpg"
                            },
                            {
                                "categoryId": "3",
                                "id": "4183",
                                "name": "Sabonete Infantil Líquido Granado Bebê Lavanda 250ml",
                                "price": 20.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/4183.jpg"
                            },
                            {
                                "categoryId": "3",
                                "id": "10172",
                                "name": "Creme de Assaduras Huggies Supreme Care 80g",
                                "price": 21.9,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/999211.jpg"
                            },
                            {
                                "categoryId": "3",
                                "id": "37573",
                                "name": "Fralda Protek Proteção de Mãe Pom Pom M 86un",
                                "price": 57.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7896012878484_1_1_3000_300_rgb.jpg"
                            },
                            {
                                "categoryId": "3",
                                "id": "41423",
                                "name": "Fralda Descartável Infantil Premium Care P Pampers 40 Unidades",
                                "price": 55.69,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/997384.jpg"
                            },
                            {
                                "categoryId": "3",
                                "id": "8272",
                                "name": "Toalha Umedecida Personal Soft & Protect 50un.",
                                "price": 7.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/8272.jpg"
                            },
                            {
                                "categoryId": "3",
                                "id": "9888",
                                "name": "Kit Shampoo + Condicionador Infantil Princesa Frozen Baruel 230ml",
                                "price": 16.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/9888.jpg"
                            },
                            {
                                "categoryId": "3",
                                "id": "41419",
                                "name": "Fralda Descartável Infantil Premium Care G Pampers 30 Unidades",
                                "price": 55.69,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/997375.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BSE5IQUdPejdQeFhhRDVPM0JscU10bUFBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF5Tk9Zc3A3a0cvcTFtQkVDUUNBUkNBZ2dKSmVWOENLYjFpb1lma2sxY1NDOGp3K3RFZC80eHZUdnJ3YTNHMU9MdjlweE1JYXFWWVBBbEl3dkNJQ0cydXozN3IvUkF4L1Q0MnhPZGNVR3NDMWQwVnNoUy83K0k1YVBEclRwMVJoM3o2VkZ6TVhnY2dQdXZ1N2lnSDBOTXBCMVpRS2hXZXRwYzFFS2Qwdjg3OGJodmV5UlppbndJcDdRMEVaRFRpZEw4K3BtTjVna1d0dkpsKzltR0pUZ09pN0poeVU0cFZ3a29YRy95cnoxVDJQWXhqNyt3ajFzMXkxWXlqOFJvR1VxaFJweFJmb1U3eEswZFllNjdlZDRSUUtSaGwyZnA5OGN5SFRXRVlSeXc5eVhibU1qTGFzaHIvZitiU3JSSDRiM1Y3cWd4aFBYMEdueGsveXllbnprUUNwWjhnbUwxYnVnT0hCYjdrZ2J5NllKNzFlQ3NXWHd3eE5GTXhkbkNWTGpiamJmcWEzMWI3WitncUh1Kythdm1aVHZYd1V2Q3F6ODJhQk5vNXY4elBtV29FT1VQZytPby90MVhzMTZwa1gzUTkzV3A1a3JSdmdTQk5nbTFpam1WNFF2ZGpCMFpYU01lbnk0M2t1bUJmdXZJNU1vV1Y4RCtkQmJJZ1dYMS9xRmplTnpQWWtGYUZXUUY2Ymt5QXRDRGR6WTdMbWVUYTA3aG1GWTlZK3VYWGM0NTYzV1NjL2VrR3o5ZThjbDdudWd3TmcxMW82bjBOK0NLams0U3pnY0d2R2krQjdRNThXK3ZrWVRaRXBLNFcrSDNFck1UNjkrVWtzaTdhUzNxUHFKZUZTQzNnalBiODR1TDdNUGNaM2cxTDFua3kzZnFwUEN6WG1SVUkxZE80ampBbnlMNmNvWHRVTzgxZmM5dnYxeU13bmRrRzQrOEl6SXRZZWZ3SWR3Q1dzcTgxRnRQUTBMMzIzRTgyQzV6eGRPSGNXVDkrbjgxdnRLWENaZmVDTWFkZERFdnVKVFVydDlkaUR4SEtPdTZyWjBBaXZGeGhVd29ZWlp0SyJ9"
                    }
                }
            }
        },
        "12": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "12",
                                "id": "9990",
                                "name": "Café Tradicional Almofada Tesouro 500g",
                                "price": 10.09,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/9990.jpg"
                            },
                            {
                                "categoryId": "12",
                                "id": "1668",
                                "name": "Café Tradicional 3 Corações 500g",
                                "price": 11.19,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/968826-1.jpg"
                            },
                            {
                                "categoryId": "12",
                                "id": "4274",
                                "name": "Macarrão Instantâneo Nissin Talharim Brócolis e Molho Branco 99g",
                                "price": 2.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7891079000441.jpg"
                            },
                            {
                                "categoryId": "12",
                                "id": "6239",
                                "name": "Fermento Biológico Fleischmann 500g",
                                "price": 18.09,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/6239.jpg"
                            },
                            {
                                "categoryId": "12",
                                "id": "3435",
                                "name": "Biscoito Wafer Sabor Chocolate Duchen 140g",
                                "price": 1.45,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/3435.jpg"
                            },
                            {
                                "categoryId": "12",
                                "id": "4831",
                                "name": "Macarrão de Sêmola Concha Galo 500g",
                                "price": 2.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7896022200312.jpg"
                            },
                            {
                                "categoryId": "12",
                                "id": "1168",
                                "name": "Sequilho Panco 500g",
                                "price": 9.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/92819.jpg"
                            },
                            {
                                "categoryId": "12",
                                "id": "7065",
                                "name": "Biscoito Amanteigado Sabor Chocolate Visconti 335g",
                                "price": 5.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/7065.jpg"
                            },
                            {
                                "categoryId": "12",
                                "id": "1274",
                                "name": "Óleo de Girassol Liza Pet 900ml",
                                "price": 11.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/1274.jpg"
                            },
                            {
                                "categoryId": "12",
                                "id": "38475",
                                "name": "Salgadinho Pastel de Carne Torcida 70g",
                                "price": 1.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/966719.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BR3FQN3BYQmlzNnNBNzgwdUNOL0tNckFBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF3STBOOCs2NFRmL25NU0tOVUNBUkNBZ2dKSndTUWczam9wOEhuWU5icCtUVDZ0RG5mTjdsTFdIZm9FNHJ4QVJ2c3hkczlnQnp4Z3FHa0xHc2hkQ0ZSbDl6YnBJcE9uS05OLytXd3pjdFllaU80ZjFmVDRYL3o3SHhoYko1M29GSDk1Ylk2M1JGMXI0bjBTbWFRZjdqWStnc3RDbWsyRW5scXhvbFNVaERYb0ZNOGxRVTZvR3EydHlVTEFoOE1SaEVwd2ZLV3NtR0xQZ2FmS3ZTMTc0VitLMnJCNjhIaFhFNm5xTmwzSURhM0daS1YxSVlYZGxSZDJWR0oxWnk5dVl5VDQ3eHhCMjRhQTNaTHlNaVRVbmIxcGdiU295blNMOTFvVUUvSVRBSTBjVmIwRWVNMDBMZStQLzZxbC8wc1JPY1pmS2JJUUNQMFRyZ2I1b25lbmRnSUlseVczYWpsUVY0WjNYeW00eWFaSnpBNXA5d25qTjVLTllDRG1HQWhNd0FMeS8zQU40OXBvU2F6OU1Yc2ZzY2dVWGNSYjhiUE92UDJzKytBdEJIMmNNMFVqRlVwOVVmdnFvQWtOWXlEcVNkTDRnSmZnS2d6ZWQrbE55MmVhZzdtL0l0SHlKVXVIWlNIaUhQNnFkbGFyLzd0ZFFNaFJVSm5VODRMRFZRQWRmb2hjaFJ3dTc0VGJmbFl5cVJqK1MyTldTc1JWQTJIVjh0RE8rRVVZZVRYOHlBZlRQNzRzTFpIZk96NFJSWkdTU3d1eml5N0Y2VUs2c1lkdFFCRWhSV3hVbzJVV1FSeXZhR3MzTGs4c2lMT3BjVGVVb0VTQnpYcE5qMlZsSkZKb1RDTXE0enMyZk1MWEtmelFOK2xEZ09kQVRvdzFLMUN4RkNMU2kzdVJsMTdCaFlIdU5EYWZaTmpNeG14b25EcUVCekVObTVpTHB6b3R2OCtxRXlVODZCU1VHRGI4WTJPMTZmR0U2YlpwdFVkcTZlUGd3Ulg0bXBWalUxMVAxTmtxUFJPUWQrQ0JiNERQdk9JYXczUUVQbmlwVWZkL0R0d2FzZXpjWXNieSJ9"
                    }
                }
            }
        },
        "10": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "10",
                                "id": "1292",
                                "name": "Alface Hidropônica Unidade",
                                "price": 2.59,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/1292.jpg"
                            },
                            {
                                "categoryId": "10",
                                "id": "3016",
                                "name": "Pasta de Alho Select 400g",
                                "price": 9.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/3016.jpg"
                            },
                            {
                                "categoryId": "10",
                                "id": "1519",
                                "name": "Ovos Caipira Com 10 Unidades",
                                "price": 8.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/1519.jpg"
                            },
                            {
                                "categoryId": "10",
                                "id": "2357",
                                "name": "Alho Frito Nena 500g",
                                "price": 26.89,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/2357.jpg"
                            },
                            {
                                "categoryId": "10",
                                "id": "1286",
                                "name": "Alface Crespa Unidade",
                                "price": 2.89,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/1286.jpg"
                            },
                            {
                                "categoryId": "10",
                                "id": "6372",
                                "name": "Pimentão Amarelo 740g",
                                "price": 11.018600000000001,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/6372.jpg"
                            },
                            {
                                "categoryId": "10",
                                "id": "1304",
                                "name": "Alho Poró Unidade",
                                "price": 3.19,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/1304.jpg"
                            },
                            {
                                "categoryId": "10",
                                "id": "5040",
                                "name": "Cebola Pacote 10kg",
                                "price": 37.89,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/5040.jpg"
                            },
                            {
                                "categoryId": "10",
                                "id": "3653",
                                "name": "Tempero Com Pimenta Select 400g",
                                "price": 12.89,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/3653.jpg"
                            },
                            {
                                "categoryId": "10",
                                "id": "1231",
                                "name": "Brócolis Maço",
                                "price": 6.49,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/1231.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BR3RxRGY0cXR0dnZ3Sm51em04RlVFYUFBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF4SVVURVIxbFdPTWM3QlVhd0NBUkNBZ2dKSjVKdG42L2FvUFpzZ1VCSDZ3YTNsaUdsbmlnWWl4R3p0SjMwSVc1SVRXSnZrUEpSVGFVZDRNYkRlTG4yQ1h1S0FUUTNnQ2k5MmZLOVNWK0w2aHp1MmxaQ2gxc1VJWWJXeHh6WStMcUJuL21QYkk1ZnNNTWxDaGhsMk5mYXd6anFNVVlRL2IrWHBxTFpNMXNBRjc3MVNVWW9QYzhZb01iNlgzUm5Bc05rL2tjZDdWdUp2SGFZZDRxMFdhUnJVcm53MjgyT25mYXlCZGhRV0pwcHR4TkdBWGcvQllXdEFyOWtKRjgrakFJd1labnRzMkhJRXJRUXF6a0ZhQlU1Tkdpb28zTlp0V2RFT05DZFZBVE5QNk8wOGg2NllkTU90MzlkbVNheFAweWYxZkFCeU9IbFJqLzNwdnZ4QkszRUoweHB0a1dnVzAvQVpvcmNtNFNON0Nsa1NhQUVOalFtZktPSjBjUy9iZmVpTmEyZ0Mzd0JhYkVLYTdTMUh1cWZDL2FiWlJkTStOdmkxNFRaR1RCSEo4MlJvNVU1bmV6UzRyMHB2MGtxNjRBUnFxY1NrdVlkUkxtYTN3NHdOVVlmRVZDRlFJeHFzeHZFbEsyQlRYRVU1cEg5ZG04Vyt6ejRnN2RWZjBscWRqcFAraUwwcjdFRGJQUFNweHRIdlY2MVo0TFZHYmdIMjZwSEtoL05oZnlxa1lFWXJTSXFjZXFuR1U4K3J6MWRuN2N0cU1ycXpwMlpPWU5VYk5HUHFYOERDMzhKSWc2Lyt0VEVkU2RZMUV6RnNPYXB6MW9tQWJPY2lVTnJzY2NKUDVyaGRsd2hQSEQ4Ym1MTitFZ280Zmt0Y25qdVp5MWVZOHZseXBaczB5Q3JRVHBqOU5YNDRUd0c1UHovQXh0TkcvZjlnMXQrakNQdmJ2d3o3bm1hMVVNL2lIWlJ1UnI4UWFDc3RYOXpLZ1U0dHNRZjg1SmhCWVhuWVhKN2dPcUVXY2FNQW1KZ25RUHc1TWJhWkZ5MFVaRlBFYmI1WFMzbTM0QXBiYTY2SCJ9"
                    }
                }
            }
        },
        "14": {
            "data": {
                "getTendaAtacadoDepartment": {
                    "products": {
                        "items": [
                            {
                                "categoryId": "14",
                                "id": "37764",
                                "name": "Areia para Gatos Classic Pipicat 12kg",
                                "price": 20.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/plu-960210.jpg"
                            },
                            {
                                "categoryId": "14",
                                "id": "37766",
                                "name": "Areia para Gatos Classic Pipicat 4kg",
                                "price": 9.39,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/plu-960226.jpg"
                            },
                            {
                                "categoryId": "14",
                                "id": "6216",
                                "name": "Ração para Gatos Sabor Frutos do Mar Friskies 3kg",
                                "price": 47.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/967609.jpg"
                            },
                            {
                                "categoryId": "14",
                                "id": "8924",
                                "name": "Alimento para Gatos Sabor Peixe Kitekat 70g",
                                "price": 1.89,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/8924.jpg"
                            },
                            {
                                "categoryId": "14",
                                "id": "1400",
                                "name": "Ração para Cães Raças Pequenas Pedigree 10,1kg",
                                "price": 115.99,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/1400.jpg"
                            },
                            {
                                "categoryId": "14",
                                "id": "3819",
                                "name": "Ração para Cães Carne Faro 2kg",
                                "price": 22.89,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/3819.jpg"
                            },
                            {
                                "categoryId": "14",
                                "id": "38383",
                                "name": "Petisco para Cães Adultos Raças Minis e Pequenas Purina Dog Chow Saúde Oral 45g",
                                "price": 6.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/959166_mini.jpg"
                            },
                            {
                                "categoryId": "14",
                                "id": "9406",
                                "name": "Bifinho Sabor Carne Baw Waw 50g",
                                "price": 2.89,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/9406.jpg"
                            },
                            {
                                "categoryId": "14",
                                "id": "4881",
                                "name": "Biscoito para Cães Biscrock Multi Pedigree 500g",
                                "price": 17.79,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/4881.jpg"
                            },
                            {
                                "categoryId": "14",
                                "id": "4625",
                                "name": "Ração para Cães Raças Médias Cozido de Carne e Cereais Faro 10,1kg",
                                "price": 81.29,
                                "thumbnail": "https://api.tendaatacado.com.br/fotos/4625.jpg"
                            }
                        ],
                        "nextToken": "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BRUgybHhBSENOYVdOTmJ2WDJ3T1U4bkFBQUNsakNDQXBJR0NTcUdTSWIzRFFFSEJxQ0NBb013Z2dKL0FnRUFNSUlDZUFZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF6R21nam1wT0sxTDBreU52TUNBUkNBZ2dKSmp0NzlZR0FjTDdJMVNCcEhId0tsQ1dSK01DNENzUnAvT3BaY1NXb1J4NnJMTGp1NTBuVjZGUmZTOHhva1lUZnNmdVZFY3pxREFhQy9OZ0RaT3NneG5IOW5lWVF0OTRKeUgzYlE1anljZjM0WlY2alBkdS9ZQm5OWVpJQjZ5ZXlHWG9PYlVGTi9JQW53Tnp3NmlsaE9BUjFGVFB5V29Ia2JORkxBZDdPd3FzeWpTc01uMGkxSTZTVERxU3FKam9zalpIejhyT1FUTXROQlJBbU9BWW80VmRja2t4ZzFXRjBPdzhIdjFFd2F4S2o2TnYxdU8xbTFwZ3BnQzczcCtBQVNMMUJtb2tyVXdBK1F4cDB6V1NLMkJ1bVNWK2VyWTFZS2RtdTd5cDVaY1ZxL0tUMEszTzhJN2drSnhFVmhjOWRTMGltWnBBUlJQUmlKODRVNlhZUksremg1MllCSkI5TFE4MGV5OFo4TWNjVUVCNlpNdDdLcTdSa253bHpLbURtaHE5eGQzbTZvVHhJUnFKK0VCSDY1MHhzdFd3RHc5U2VoUTBvNVY1blpoYU9ET1VJUEMwV3d6eHZIODhzYUhIZzZRdkhiWDE2OFRZSE9VWlBLUjB6OGZQU2x3cFYvNFN6NXEvUXJMU1ZQdVpESHBybGdQbit0NnVWbUxlQy9lY3RFVS9IeTFzc045KzZ0WmdLM3VTNjNoaFBwUlVrczArUlBGTG9paGxhbFRiR0RMR3N1dkNiVDBPcGFvcGxIczQ1OHZSdkhYZGNHMzRBRmpnOE5zZFdHdUxmeUkxMHZaaTJlZUlYNGpzWkFCekVUUzBpR2kzV0tXelAxKzRQdnZkdUgwT0VTd01WYnplSy9hRVMwNUNVL21rZ3NTb0ErdFVFMktyTk9VR3FZV1JoVEVQdlNzUDFjT2xKckRLSzAvK3QvWlI2UDh3Q2Y2YnNkeXRQU3hxczduK1hHN244cjgvVUliVGhUUE53OG1wa2pTUUVEbElzSDdWNk1WSDFESVk0VlhrcmVQbE01TTFISyJ9"
                    }
                }
            }
        }
    }
    // @ts-ignore
    return data[departmentId];
}
