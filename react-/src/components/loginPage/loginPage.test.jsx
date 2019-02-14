import React from "react";
import {shallow ,  mount } from "enzyme";
import LoginPage from './loginPage';
import profile from './profile'
import UserStore from '../Store';
import {MemoryRouter } from "react-router-dom";
import App from '../../App';
import router from '../../router'

const rrd = require('react-router-dom');
// Just render plain div with its children
rrd.BrowserRouter = ({children}) => <div>{children}</div>
module.exports = rrd;

describe('loginPage', () => {
    let props;
    let mountedLoginPage;
    const APPpage = () => {
        if (!mountedLoginPage) {
            mountedLoginPage = mount(
                <MemoryRouter initialEntries={['/loginForm' ]}>
                    <App/>
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
        const input = APPpage().find('input');
        expect(input.length).toBeGreaterThan(0);
    });

    it("always renders a `button`", () => {
        expect(APPpage().find('button').length).toBe(1);
    });

    it('should take user as an item and should not be verified', () => {
        const loginForm = APPpage();
        loginForm.setState({name: 'hashName'});
        expect(loginForm.find(LoginPage).instance().verifyUser(loginForm.state().name)).toBeFalsy();
    });

    it('should take user as an item in store and should be verified', () => {
        UserStore.addUser('gholi');
        const loginForm = APPpage().find(LoginPage);
        loginForm.setState({name: 'gholi'});
        loginForm.instance().verifyUser(loginForm.state().name);
        expect(loginForm.state().userIsValid).toEqual(true);
    });

    it('should check after user verification route changes' , async ()=>{
        let loginForm = APPpage().find(LoginPage);
        loginForm.instance().verifyUser(loginForm.state().name);
        expect(APPpage().find('Route[path="/profile/:id"]').first().prop('component')).toBe(profile);
    })
});


