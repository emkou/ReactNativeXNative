//
//  MainViewController.m
//  ReactNativeXNative
//
//  Created by Emil Doychinov on 2019-08-21.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "MainViewController.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "TableViewController.h"

@interface MainViewController ()

@end

@implementation MainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
}

#pragma mark go to ReactNative bridge
- (IBAction)openReactNative:(id)sender {
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"ReactNativeXNative"
                                            initialProperties:nil];
  
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  
  UIViewController *reactNativeViewController = [UIViewController new];
  reactNativeViewController.view = rootView;
  [self.navigationController setNavigationBarHidden:YES];
  [self.navigationController pushViewController:reactNativeViewController animated:YES];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

#pragma mark go to native tableView
- (IBAction)openNative:(id)sender {
  TableViewController * tableViewController = [TableViewController new];
  [self.navigationController pushViewController:tableViewController animated:YES];
}

@end
