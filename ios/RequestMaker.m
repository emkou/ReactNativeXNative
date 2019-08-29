//
//  RequestMaker.m
//  ReactNativeXNative
//
//  Created by Emil Doychinov on 2019-08-26.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RequestMaker.h"

static NSString *const kDataUrl = @"http://www.mocky.io/v2/5d5fcee22f00007f225f3953";

@interface RequestMaker()
@property (nonatomic, strong) NSURLSessionDataTask *downloadTask;
@end

@implementation RequestMaker

-(void)fetchData:(void (^)(NSArray<Person *> *))callback {
  NSURL *url = [NSURL URLWithString:kDataUrl];
  [self.downloadTask cancel];
  self.downloadTask = [[NSURLSession sharedSession]
                                        dataTaskWithURL:url completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
                                          
                                          NSArray *jsonArray = [NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:&error];
                                          
                                          if (error != nil) {
                                            callback([NSArray new]);
                                          }
                                          else {
                                            NSMutableArray<Person *> * mappedObjects = [NSMutableArray new];
                                            for (NSDictionary * personDictionary in jsonArray) {
                                              Person * person = [[Person alloc] initWithDictionary:personDictionary];
                                              [mappedObjects addObject:person];
                                            }
                                            
                                            callback(mappedObjects);
                                          }
                                        }];
  
  [self.downloadTask resume];
}
@end
