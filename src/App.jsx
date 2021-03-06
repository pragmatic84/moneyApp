import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routeSettings from 'Enum/routeSettingsEnum';

import DynamicImportUtil from 'Utils/dynamicImportUtil';
import StyledApp from 'StyledComponents/StyledApp';

const appRoutes = Object.values(routeSettings);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            cards: [],
        };
    }

    componentDidMount() {
        import('./data/users.json')
            .then((response) => {
                const { users, cards } = response;
                this.setState({
                    users,
                    cards,
                });
            });
    }

    render() {
        const { cards, users } = this.state;
        return (
            <StyledApp className="grid-container">
                <div className="body">
                    <Router>
                        <Route
                            render={({ location }) => (
                                <Switch key={location.key} location={location}>
                                    {appRoutes.map(({ path, RouteComponent }) => (
                                        <Route
                                            exact
                                            key={path}
                                            path={path}
                                            render={() => <DynamicImportUtil path={RouteComponent} users={users} cards={cards} />}
                                        />
                                    ))}
                                </Switch>
                            )}
                        />
                    </Router>
                </div>
            </StyledApp>
        );
    }
}

export default App;
