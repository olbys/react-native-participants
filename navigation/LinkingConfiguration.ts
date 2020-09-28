import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Connexion: 'Connexion',
            Main: {
                screens: {
                    TabFormations: {
                        screens: {
                            TabFormationsScreen : 'TabFormationsScreen'
                        }
                    },
                },
            },
            // Root: {
            //   screens: {
            //     TabOne: {
            //       screens: {
            //         TabOneScreen: 'MesFormations',
            //       },
            //     },
            //     TabTwo: {
            //       screens: {
            //         TabTwoScreen: 'two',
            //       },
            //     },
            //   },
            // },
            NotFound: '*',
        },
    },
};
