export default {
    '**/*.php*': ['vendor/bin/duster fix'],
    '**/*': 'prettier --write resources/ --ignore-unknown',
};
