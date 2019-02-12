import React from "react";
import { mount } from "enzyme";
import LoginPage from './loginPage';
import UserStore from '../Store'

describe('loginPage', () => {
    let props;
    let mountedLoginPage;
    const loginPage = () => {
        if (!mountedLoginPage) {
            mountedLoginPage = mount(
                <LoginPage {...props} />
            )
        }
        return mountedLoginPage
    };
    beforeEach(() => {
        mountedLoginPage = undefined
    });

    it('always renders a input type checkbox', () => {
        const input = loginPage().find('input');
        expect(input.length).toBeGreaterThan(0);
    });

    it("always renders a `button`", () => {
        expect(loginPage().find('button').length).toBe(1);
    });

    it('should take user as an item and should not be verified', () => {
        const loginForm = loginPage();
        loginForm.setState({name: 'hashName'});
        expect(loginForm.instance().verifyUser(loginForm.state.name)).toBeFalsy();

    });

    it('should take user as an item and should not be verified', () => {
        const loginForm = loginPage();
        loginForm.setState({name: 'hashName'});
        expect(loginForm.instance().verifyUser(loginForm.state.name)).toBeFalsy();

    });
});

