import React from "react";
import { mount } from "enzyme";
import LoginPage from './loginPage';
import UserStore from '../Store';
import {MemoryRouter} from "react-router-dom";

describe('loginPage', () => {
    let props;
    let mountedLoginPage;
    const loginPage = () => {
        if (!mountedLoginPage) {
            mountedLoginPage = mount(
                <MemoryRouter initialEntries={['/loginForm']}>
                    <LoginPage {...props} />
                </MemoryRouter>
            )
        }
        return mountedLoginPage
    };
    beforeEach(() => {
        mountedLoginPage = undefined;
        props = {
            history: {push: function () {}
            }
        }
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
        expect(loginForm.find(LoginPage).instance().verifyUser(loginForm.state().name)).toBeFalsy();

    });

    it('should take user as an item in store and should be verified', () => {
        UserStore.addUser('gholi');
        const loginForm = loginPage().find(LoginPage);
        loginForm.setState({name: 'gholi'});
        loginForm.instance().verifyUser(loginForm.state().name);
        expect(loginForm.state().userIsValid).toEqual(true);
    });
});


