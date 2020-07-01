import React from 'react';
import { Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import TalltalesIndexItem from './taltales_index_item';
class TalltalesIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = { talltales: this.props.talltales }
    }




    render(){
        // const talltales =  this.state.talltales.map(talltale => (
        //     <TalltalesIndexItem
        //         key={talltales._id}
        //         talltale={talltale}
        //         fetchTalltale={this.props.fetchTalltale}
        //     />
        // ))

        return(
        

            <div className="talltales-index-container">
                <div>
                    {
                       this.state.talltales.map(talltale => (
            <TalltalesIndexItem
                        key={talltale._id}
                        talltale={talltale}
                        fetchTalltale={this.props.fetchTalltale}
                    />
        ))
                    }
                </div>
                <Link to="/talltalesform" >Add A Talltale </Link>
            </div>

        );
    }
}

export default withRouter (TalltalesIndex)