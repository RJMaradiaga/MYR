import React from 'react';
import Editor from '../components/Editor';
import Header from '../components/Header';
import View from '../components/View';
import PropTypes from 'prop-types';

import * as AuthActions from '../actions/authActions.js';
import * as EditorActions from '../actions/editorActions.js';
import * as ProjectActions from '../actions/projectActions.js';
import * as SceneActions from '../actions/sceneActions.js';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Ide = ({ editor, editorActions, user, authActions, scene, sceneActions, projectActions, projects, match }) => (
  <div className="App">
    <Header
      logging={authActions}
      sceneActions={sceneActions}
      actions={editorActions}
      user={user}
      scene={scene}
      text={editor.text}
      message={editor.message}
      projectId={match.params.id}
      projectActions={projectActions}
      projects={projects}
    />
    <div className="row no-gutters">
      <div id="interface" className={`col-12 ${scene.viewOnly ? "d-none" : "col-md-4"}`} >
        <Editor text={editor.text} user={user} />
      </div>
      <div id="scene" className={`col-12 ${scene.viewOnly ? "" : "col-md-8"}`} >
        <View objects={editor.objects} sceneConfig={scene} assets={editor.assets} />
      </div>
    </div>
  </div>
);

// This makes sure we are getting what we think we should
Ide.propTypes = {
  editor: PropTypes.object.isRequired,
  user: PropTypes.object,
  scene: PropTypes.object.isRequired,
};

// This makes the values accessible as props
const mapStateToProps = state => ({
  editor: state.editor,
  user: state.user.user,
  scene: state.scene,
  projects: state.project
});

// This maps dispatch actions to props
const mapDispatchToProps = dispatch => ({
  editorActions: bindActionCreators(EditorActions, dispatch),
  authActions: bindActionCreators(AuthActions, dispatch),
  sceneActions: bindActionCreators(SceneActions, dispatch),
  projectActions: bindActionCreators(ProjectActions, dispatch)
});

// This does the binding to the redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ide);
