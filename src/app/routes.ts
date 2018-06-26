import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './components/album/album-list/album-list.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { AlbumDetailsComponent } from './components/album/album-details/album-details.component';

const routes: Routes =
    [{

        path: 'PostList', component: PostListComponent
    }, {
        path: 'PostDetail', component: PostDetailComponent
    }, {
        path: 'AlbumList', component: AlbumListComponent
    }, {
        path: 'AlbumDetail', component: AlbumDetailsComponent
    }, {
        path: '**', redirectTo: 'PostList',
        pathMatch: 'full'
    }];

export const BaseRoutes = RouterModule.forRoot(routes);
