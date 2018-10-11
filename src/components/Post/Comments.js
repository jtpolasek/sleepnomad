import React from "react";
import PropTypes from "prop-types";
import Disqus from "disqus-react";
import config from "../../../content/meta/config";

const Comments = props => {
  const disqusConfig = {
    title: props.title
  };

  return (
    <React.Fragment>
      <div id="post-comments" className="comments">
        <Disqus.DiscussionEmbed shortname="thesleepnomad" config={disqusConfig} />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .comments {
          margin: 0 -8px ${props.theme.space.default};
        }
      `}</style>
    </React.Fragment>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Comments;
