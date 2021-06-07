import { render } from '@testing-library/react';
import { Dashboard } from '../components/Dashboard';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

describe('Dashboard', () => {
    let dashboard: HTMLDivElement
    Object.assign(window, {SVGPathElement: () => {}});
    beforeEach(() => {
        const { queryByTitle } = render(<Dashboard data={[]} />)
        dashboard = queryByTitle('dummyDashboard') as HTMLDivElement;
    })
    it('should render dashboard', () => {
        expect(dashboard).toBeTruthy();
    })
})
