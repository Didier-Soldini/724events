/**
 * 
 */

import { getMonth } from './index';

describe('Date helper', () => {
    describe('When getMonth is called', () => {
        it('returns "janvier" for date 2022-01-01', () => {
            const date = new Date('2022-01-01');
            expect(getMonth(date)).toEqual('janvier');
        });

        it('returns "juillet" for date 2022-07-08', () => {
            const date = new Date('2022-07-08');
            expect(getMonth(date)).toEqual('juillet');
        });
    });
});

