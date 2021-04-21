import '../../assets/styles/base.css'
import config from '../../assets/config'
import HeaderContainer from '../HeaderContainer'
import HomeContainer from '../../containers/Home'
import Follow from '../Follow'
import PostDetail from '../../containers/PostDetail'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import { Grid } from '@mycv/mycv-grid'

function App() {
    return (
        <Router>
            <Grid>
                <HeaderContainer />
                <Grid type="wide" maxWidth={config.mainWidth}>
                    <Switch>
                        <Route path={config.routes.home} exact component={HomeContainer}></Route>
                        <Route path={config.routes.postDetail} component={PostDetail}></Route>
                        <Route path={config.routes.follow} component={Follow}></Route>
                    </Switch>
                </Grid>
            </Grid>
        </Router>
    )
}

export default App;