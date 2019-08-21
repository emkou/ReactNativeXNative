/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"



@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.window = [[UIWindow alloc] initWithFrame:UIScreen.mainScreen.bounds];
  MainViewController *viewController = [[MainViewController alloc] initWithNibName:@"MainViewController" bundle:nil];
  UINavigationController * nav = [[UINavigationController alloc] initWithRootViewController:viewController];
  self.window.rootViewController = nav;
  [self.window makeKeyAndVisible];
  return YES;
}



@end
