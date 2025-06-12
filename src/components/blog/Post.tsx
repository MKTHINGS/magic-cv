"use client";

import { Column, Flex, Heading, Media, SmartLink, Tag, Text, Row } from '@once-ui-system/core';
import styles from './Posts.module.scss';
import { formatDate } from '@/app/utils/formatDate';
import { DisqusCommentCount } from './Disqus';

interface PostProps {
    post: any;
    thumbnail: boolean;
    direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
    return (
        <SmartLink
            fillWidth
            unstyled
            style={{ borderRadius: 'var(--radius-l)' }}
            key={post.slug}
            href={`/blog/${post.slug}`}>
            <Flex
                position="relative"
                transition="micro-medium"
                direction={direction}
                radius="l"
                className={styles.hover}
                mobileDirection="column"
                fillWidth>
                {post.metadata.image && thumbnail && (
                    <Media
                        priority
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 640px"
                        border="neutral-alpha-weak"
                        cursor="interactive"
                        radius="l"
                        src={post.metadata.image}
                        alt={'Thumbnail of ' + post.metadata.title}
                        aspectRatio="16 / 9"
                    />
                )}
                <Column
                    position="relative"
                    fillWidth gap="4"
                    padding="24"
                    vertical="center">
                    <Heading
                        as="h2"
                        variant="heading-strong-l"
                        wrap="balance">
                        {post.metadata.title}
                    </Heading>
                    <Row gap="12" vertical="center">
                        <Text
                            variant="label-default-s"
                            onBackground="neutral-weak">
                            {formatDate(post.metadata.publishedAt, false)}
                        </Text>
                        <Text
                            variant="label-default-s"
                            onBackground="neutral-weak">
                            •
                        </Text>
                        <Text
                            variant="label-default-s"
                            onBackground="neutral-weak">
                            <DisqusCommentCount 
                                id={post.slug}
                                title={post.metadata.title}
                                path={`/blog/${post.slug}`}
                            />
                        </Text>
                    </Row>
                    { post.metadata.tag &&
                        <Tag
                            className="mt-12"
                            label={post.metadata.tag}
                            variant="neutral" />
                    }
                </Column>
            </Flex>
        </SmartLink>
    );
}