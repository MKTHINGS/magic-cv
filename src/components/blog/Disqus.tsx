"use client";

import { DiscussionEmbed, CommentCount } from 'disqus-react';
import { disqusConfig } from '@/config/disqus';
import { Column } from '@once-ui-system/core';

interface DisqusCommentsProps {
  id: string;
  title: string;
  path: string;
}

export function DisqusComments({ id, title, path }: DisqusCommentsProps) {
  const disqusShortname = disqusConfig.shortname;
  const disqusConfigProps = {
    url: `${disqusConfig.url}${path}`,
    identifier: id,
    title: title,
  };

  return (
    <Column fillWidth marginTop="40" marginBottom="40">
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfigProps}
      />
    </Column>
  );
}

export function DisqusCommentCount({ id, title, path }: DisqusCommentsProps) {
  const disqusShortname = disqusConfig.shortname;
  const config = {
    url: `${disqusConfig.url}${path}`,
    identifier: id,
    title: title,
  };

  return (
    <CommentCount
      shortname={disqusShortname}
      config={config}
    >
      Comments
    </CommentCount>
  );
}