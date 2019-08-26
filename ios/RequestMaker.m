//
//  RequestMaker.m
//  ReactNativeXNative
//
//  Created by Emil Doychinov on 2019-08-26.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RequestMaker.h"

@implementation RequestMaker

-(void)call:(void (^)(NSArray *))callback {
  NSString *dataUrl = @"http://www.mocky.io/v2/5d5fcee22f00007f225f3953";
  NSURL *url = [NSURL URLWithString:dataUrl];
  
  // 2
  NSURLSessionDataTask *downloadTask = [[NSURLSession sharedSession]
                                        dataTaskWithURL:url completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                                          
                                          NSArray *jsonArray = [NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:&error];
                                          
                                          if (error != nil) {
                                            callback([NSArray new]);
                                          }
                                          else {
                                            callback(jsonArray);
                                          }
                                        }];
  
  [downloadTask resume];
}
@end
