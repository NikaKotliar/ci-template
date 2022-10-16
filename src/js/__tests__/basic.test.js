import getHealthIndicator from '../basic';

test.each([
    [{ name: 'Маг', health: 90 }, 'healthy'],
    [{ name: 'Маг', health: 35 }, 'wounded'],
    [{ name: 'Маг', health: 10 }, 'critical'],
])(
    ('should compare health and show health level'),
    (heroInfo, expected) => {
        const result = getHealthIndicator(heroInfo);
        expect(result).toBe(expected);
    });
